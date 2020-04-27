import React from 'react'
import PropTypes from 'prop-types'
import { PositiveNumberFormat } from '../Shared'
import UTextField from '../UTextField'

export default function UPositiveInteger({ readOnly, InputProps, ...props }) {
  return (
    <UTextField
      variant="outlined"
      InputProps={{
        inputComponent: PositiveNumberFormat,
        readOnly: readOnly,
        ...InputProps,
      }}
      {...props}
      fullWidth
    />
  )
}

// It accepts all the Material Ui TextField props
UPositiveInteger.propTypes = {
  // To make Textfield read only
  readOnly: PropTypes.bool,
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required', 'isEmail']}`
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
  /** validate the textfield on blur */
  validateOnBlur: PropTypes.bool,
}
