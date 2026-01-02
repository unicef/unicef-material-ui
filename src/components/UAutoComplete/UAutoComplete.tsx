import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Autocomplete, { createFilterOptions, AutocompleteProps } from '@mui/material/Autocomplete'
import ActiveFormTextField from '../ActiveFormTextField'

const PREFIX = 'UAutoComplete'

const classes = {
  controlStyle: `${PREFIX}-controlStyle`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.controlStyle}`]: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
}))

const filter = createFilterOptions<AutoCompleteOption>()

export interface AutoCompleteOption {
  id?: string | number
  text: string
  inputValue?: string
}

export interface UAutoCompleteProps
  extends Omit<
    AutocompleteProps<AutoCompleteOption, boolean, boolean, boolean>,
    'options' | 'value' | 'onChange' | 'renderInput' | 'getOptionLabel' | 'renderOption'
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
  /** To enable character counter */
  counter?: boolean
  /** placeholder text*/
  placeholder?: string
  /** Props applied to slots.*/
  slotProps?: Record<string, any>
  /** read only */
  readOnly?: boolean
}

/**
 * UAutoComplete is an editable dropdown component.
 * User can enter the text in order to find the value from the list of values
 * User can also add new value to the list as well.
 */
export default function UAutoComplete({
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
  counter = false,
  placeholder,
  slotProps,
  ...props
}: UAutoCompleteProps) {
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
      {readOnly ? (
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
          {...props}
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
          className={classes.controlStyle}
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
                    ? params.slotProps.htmlInput
                    : {}),
                  ...(params?.inputProps ? params.inputProps : {}),
                  minLength,
                  maxLength,
                },
                input: {
                  ...(params?.slotProps?.input ? params.slotProps.input : {}),
                  ...(params?.InputProps ? params.InputProps : {}),
                },
                inputLabel: {
                  ...(slotProps?.inputLabel ? slotProps?.inputLabel : {}),
                  ...(params?.InputLabelProps ? params.InputLabelProps : {}),
                  required: isRequired,
                },
              }}
              maxLength={maxLength}
              counter={counter}
              placeholder={placeholder}
              readOnly={readOnly}
            />
          )}
          {...props}
        />
      )}
    </Root>
  )
}

