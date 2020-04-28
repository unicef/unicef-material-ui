import React from 'react'
import PropTypes from 'prop-types'
import ActiveFormTextField from '../ActiveFormTextField'
import { PositiveNumberFormat } from '../Shared'

export default function ActiveFormPositiveInteger({ InputProps, ...props }) {
  return (
    <ActiveFormTextField
      variant="outlined"
      InputProps={{
        inputComponent: PositiveNumberFormat,
        ...InputProps,
      }}
      {...props}
      fullWidth
    />
  )
}

// It accepts all the Material Ui TextField props
ActiveFormPositiveInteger.propTypes = {
  /** label */
  label: PropTypes.string,
  /** placeholder text*/
  placeholder: PropTypes.string,
  /** Typography for text inside the input (Ex: h1, div, etc.) */
  typographyVariant: PropTypes.string,
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding: PropTypes.string,
  /** To hide or display the textfied border*/
  showBorder: PropTypes.bool,
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
  customErrorMessages: PropTypes.array,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Name of input. */
  name: PropTypes.string,
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
}
