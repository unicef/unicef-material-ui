import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Autocomplete, { createFilterOptions, AutocompleteProps } from '@mui/material/Autocomplete'
import ActiveFormTextField from '../ActiveFormTextField'
import { AutoCompleteOption } from '../UAutoComplete'

const PREFIX = 'ActiveAutoComplete'

const classes = {
  root: `${PREFIX}-root`,
  focused: `${PREFIX}-focused`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    marginTop: theme.spacing(2),
    width: '100%',
    '& .UPopupIndicator': {
      visibility: 'hidden',
    },
    '&:hover': {
      '& .UPopupIndicator': {
        visibility: 'visible',
      },
    },
  },

  [`& .${classes.focused}`]: {
    '& .UPopupIndicator': {
      visibility: 'visible',
    },
  },
}))

const filter = createFilterOptions<AutoCompleteOption>()

export interface ActiveAutoCompleteProps
  extends Omit<
    AutocompleteProps<AutoCompleteOption, boolean, boolean, boolean>,
    'options' | 'value' | 'onChange' | 'renderInput' | 'getOptionLabel' | 'renderOption' | 'classes'
  > {
  /** selected value of the dropdown */
  value?: AutoCompleteOption | null
  /** label */
  label?: string
  /** options to display */
  options?: AutoCompleteOption[]
  /** dropdown on change event */
  onChange?: (value: AutoCompleteOption | null, name?: string) => void
  /** enable required validator */
  isRequired?: boolean
  /** enable required error in dropdown */
  hasError?: boolean
  /** onBlur event for dropdown  */
  onBlur?: (event: React.FocusEvent, name?: string) => void
  /** name of the dropdown */
  name?: string
  /** max length text */
  maxLength?: number
  /** min length text */
  minLength?: number
  /** can create context specific item or not */
  allowContextSpecific?: boolean
  /** used item id's from the options */
  usedItemIds?: (string | number)[]
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode?: boolean
  /** To enable character counter */
  counter?: boolean
  /** placeholder text*/
  placeholder?: string
  /** Props applied to slots*/
  slotProps?: Record<string, any>
  /** read only */
  readOnly?: boolean
}

/**
 * ActiveAutoComplete is an editable dropdown component with interactive.
 * The cool feature with ActiveAutoComplete is you can read and write at the same place.
 * User can enter the text in order to find the value from the list of values
 * User can also add new value to the list as well.
 */
export default function ActiveAutoComplete({
  value,
  label,
  onChange,
  isRequired,
  onBlur,
  name,
  options = [],
  readOnly,
  minLength,
  maxLength,
  usedItemIds = [],
  allowContextSpecific = false,
  interactiveMode = false,
  counter = false,
  placeholder,
  slotProps,
}: ActiveAutoCompleteProps) {
  const [selectedValue, setSelectedValue] = useState<AutoCompleteOption | null>(value || null)

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: AutoCompleteOption | string | null
  ) => {
    // Create a new value from the user input
    if (newValue && typeof newValue === 'object' && 'inputValue' in newValue) {
      const newOption: AutoCompleteOption = {
        text: newValue.inputValue || '',
      }
      setSelectedValue(newOption)
      onChange && onChange(newOption, name)
      return
    }
    const optionValue = typeof newValue === 'string' ? { text: newValue } : newValue
    setSelectedValue(optionValue)
    onChange && onChange(optionValue, name)
  }

  const handleFilter = (
    options: AutoCompleteOption[],
    params: { inputValue: string }
  ): AutoCompleteOption[] => {
    const filtered = filter(options, params)
    const labelForMessage = label && label.toLowerCase()
    // Suggest the creation of a new value
    if (params.inputValue !== '' && allowContextSpecific) {
      filtered.push({
        inputValue: params.inputValue,
        text: `Use context-specific ${labelForMessage ? labelForMessage : ''} "${params.inputValue}"`,
      })
    }
    return filtered
  }

  const handleGetOption = (option: AutoCompleteOption | string): string => {
    // Value selected with enter, right from the input
    if (typeof option === 'string') {
      return option
    }
    // Add "new" option created dynamically
    if (option.inputValue) {
      return option.inputValue
    }
    // Regular option
    return option.text || ''
  }

  const handleOnBlur = (e: React.FocusEvent) => {
    if (
      selectedValue &&
      selectedValue.text &&
      selectedValue.text.trim() !== ''
    ) {
      onBlur && onBlur(e, name)
    }
  }

  const controlOptions =
    options && options.length > 0
      ? options.filter(opt => !usedItemIds.includes(opt.id || ''))
      : []

  return (
    <Root>
      {!interactiveMode && readOnly ? (
        <ActiveFormTextField
          multiline
          label={label}
          slotProps={{
            ...slotProps,
            inputLabel: {
              ...(slotProps?.inputLabel ? slotProps.inputLabel : {}),
              required: isRequired,
            },
          }}
          variant="outlined"
          fullWidth
          readOnly={readOnly}
          placeholder={placeholder}
          value={selectedValue && selectedValue.text}
        />
      ) : (
        <Autocomplete<AutoCompleteOption, boolean, boolean, boolean>
          value={selectedValue}
          isOptionEqualToValue={(option, value) => option.id === value?.id}
          onChange={handleChange}
          filterOptions={handleFilter}
          id={name}
          name={name}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={controlOptions}
          getOptionLabel={handleGetOption}
          renderOption={(props, option) => <li {...props}>{option.text}</li>}
          onBlur={handleOnBlur}
          classes={{
            root: classes.root,
            focused: classes.focused,
            popupIndicator: 'UPopupIndicator',
          }}
          freeSolo={allowContextSpecific}
          renderInput={params => (
            <ActiveFormTextField
              {...params}
              multiline
              label={label}
              variant="outlined"
              value={(selectedValue && selectedValue.text) || ''}
              validators={isRequired ? ['required', 'trim'] : ['trim']}
              fullWidth
              slotProps={{
                ...slotProps,
                htmlInput: {
                  ...(params?.slotProps?.htmlInput
                    ? params?.slotProps?.htmlInput
                    : {}),
                  minLength,
                  maxLength,
                },
                inputLabel: {
                  ...(slotProps?.inputLabel ? slotProps.inputLabel : {}),
                  required: isRequired,
                },
              }}
              maxLength={maxLength}
              counter={counter}
              interactiveMode={interactiveMode}
              placeholder={placeholder}
              readOnly={readOnly}
            />
          )}
        />
      )}
    </Root>
  )
}

