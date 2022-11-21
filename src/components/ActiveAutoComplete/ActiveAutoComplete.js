import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import ActiveFormTextField from '../ActiveFormTextField'

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

const filter = createFilterOptions()

/**
 * ActiveAutoComplete is an editable dropdown component with interactive.
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
  options,
  readOnly,
  minLength,
  maxLength,
  usedItemIds,
  allowContextSpecific,
  interactiveMode,
  counter,
  placeholder,
  InputLabelProps,
  props,
}) {
  //const dispatch = useDispatch()
  const [selectedValue, setSelectedValue] = useState(value || null) // for initialization: avoid the control to be a uncontrolled component with 'undefined'

  const handleChange = (event, newValue) => {
    // Create a new value from the user input
    if (newValue && newValue.inputValue) {
      setSelectedValue({
        text: newValue.inputValue,
      })
      onChange({
        text: newValue.inputValue,
      })
      return
    }
    setSelectedValue(newValue)
    onChange && onChange(newValue, name)
  }

  const handleFilter = (options, params) => {
    const filtered = filter(options, params)
    const labelForMessage = label && label.toLowerCase()
    // Suggest the creation of a new value
    if (params.inputValue !== '' && allowContextSpecific) {
      filtered.push({
        inputValue: params.inputValue,
        text: `Use context-specific ${
          labelForMessage ? labelForMessage : ''
        } "${params.inputValue}"`,
      })
    }
    return filtered
  }

  const handleGetOption = option => {
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

  const handleOnBlur = e => {
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
      ? options.filter(opt => !usedItemIds.includes(opt.id))
      : []
  return (
    <Root>
      {!interactiveMode && readOnly ? (
        <ActiveFormTextField
          multiline
          label={label}
          InputLabelProps={{
            ...InputLabelProps,
            required: isRequired,
          }}
          variant="outlined"
          fullWidth
          readOnly={readOnly}
          placeholder={placeholder}
          value={selectedValue && selectedValue.text}
        />
      ) : (
        <Autocomplete
          value={selectedValue}
          isOptionEqualToValue={option => option.id === selectedValue.id}
          onChange={(event, newValue) => handleChange(event, newValue)}
          filterOptions={(options, params) => handleFilter(options, params)}
          id={name}
          name={name}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={controlOptions}
          getOptionLabel={option => handleGetOption(option)}
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
              inputProps={{
                ...params.inputProps,
                minLength: minLength,
                maxLength: maxLength,
              }}
              InputLabelProps={{
                ...InputLabelProps,
                required: isRequired,
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

ActiveAutoComplete.propTypes = {
  /** selected value of the dropdown */
  value: PropTypes.object,
  /** label */
  label: PropTypes.string,
  /** options to display */
  options: PropTypes.array,
  /** dropdown on change event */
  onChange: PropTypes.func,
  /** enable required validator */
  isRequired: PropTypes.bool,
  /** enable required error in dropdown */
  hasError: PropTypes.bool,
  /** onBlur event for dropdown  */
  onBlur: PropTypes.func,
  /** name of the dropdown */
  name: PropTypes.string,
  /** max length text */
  maxLength: PropTypes.number,
  /** min length text */
  minLength: PropTypes.number,
  /** can create context specific item or not */
  allowContextSpecific: PropTypes.bool,
  /** used item id's from the options */
  usedItemIds: PropTypes.array,
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode: PropTypes.bool,
  /** To enable character counter */
  counter: PropTypes.bool,
  /** placeholder text*/
  placeholder: PropTypes.string,
  /** Label props applied to input field*/
  InputLabelProps: PropTypes.object,
}

ActiveAutoComplete.defaultProps = {
  allowContextSpecific: false,
  interactiveMode: false,
  counter: false,
  usedItemIds: [],
}
