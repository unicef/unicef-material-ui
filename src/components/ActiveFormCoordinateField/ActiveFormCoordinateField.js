import React from 'react'
import PropTypes from 'prop-types'
import ActiveFormTextField from '../ActiveFormTextField'
import { PositiveNumberFormat } from '../Shared'

/**
 * ActiveFormCoordinateField is a UTextField component with latitude and longitude validation.
 * The cool feature with ActiveFormCoordinateField is you can read and write at the same place.
 * * Read the content inside TextField
 * * Edit the TextField
 *
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://material-ui.com/api/text-field/#textfield-api).
 *
 * It accepts all the TextField props and styles
 *
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */

export default function ActiveFormCoordinateField({
  InputProps,
  decimalScale,
  inputProps,
  coordinateType,
  validators,
  ...props
}) {
  let validatorsArr = null
  // add validator rule for latitude
  if (coordinateType === 'latitude') {
    validatorsArr = ['isLatitude']
  }
  // add validator rule for longitude
  if (coordinateType === 'longitude') {
    validatorsArr = ['isLongitude']
  }
  if (validators && validators.length && Array.isArray(validators)) {
    validatorsArr = [...validators, ...validatorsArr]
  }
  return (
    <ActiveFormTextField
      variant="outlined"
      InputProps={{
        inputComponent: PositiveNumberFormat,
        ...InputProps,
      }}
      inputProps={{
        ...inputProps,
        thousandSeparator: false,
        allowNegative: true,
        decimalScale: decimalScale,
      }}
      validators={validatorsArr || validators}
      fullWidth
      {...props}
    />
  )
}

// It accepts all the Material Ui TextField props
ActiveFormCoordinateField.propTypes = {
  /** label */
  label: PropTypes.string,
  /** placeholder text*/
  placeholder: PropTypes.string,
  /** Typography for text inside the input (Ex: h1, div, etc.) */
  typographyVariant: PropTypes.string,
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding: PropTypes.string,
  /** To hide or display the text field border*/
  showBorder: PropTypes.bool,
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required']}`
   */
  validators: PropTypes.array,
  /**
   * customErrorMessages is an object with key as validator and value as customised error message.
   *
   * Ex: `customErrorMessages={{required: 'This field is required'}`
   */
  customErrorMessages: PropTypes.object,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Name of input. */
  name: PropTypes.string,
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
  /** No of decimal digits */
  decimalScale: PropTypes.number,
  /** Coordinate type */
  coordinateType: PropTypes.oneOf(['latitude', 'longitude']).isRequired,
  /** Change to write mode by hiding textfield border and displays border on Hover */
  interactiveMode: PropTypes.bool,
}

ActiveFormCoordinateField.defaultProps = {
  decimalScale: 9,
}
