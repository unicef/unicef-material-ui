import React from 'react'
import PropTypes from 'prop-types'
import { PositiveNumberFormat } from '../Shared'
import UTextField from '../UTextField'

/**
 * UCoordinateField is a UTextField component with latitude and longitude validation.
 *
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://material-ui.com/api/text-field/#textfield-api).
 *
 * It accepts all the TextField props and styles
 *
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */
export default function UCoordinateField({
  readOnly,
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
    <UTextField
      variant="outlined"
      InputProps={{
        inputComponent: PositiveNumberFormat,
        readOnly: readOnly,
        ...InputProps,
      }}
      inputProps={{
        ...inputProps,
        thousandSeparator: false,
        allowNegative: true,
        decimalScale: decimalScale,
      }}
      validators={validatorsArr || validators}
      {...props}
      fullWidth
    />
  )
}

// It accepts all the Material Ui TextField props
UCoordinateField.propTypes = {
  // To make Text field read only
  readOnly: PropTypes.bool,
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
}

UCoordinateField.defaultProps = {
  decimalScale: 9,
}
