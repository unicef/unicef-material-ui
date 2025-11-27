import React from 'react'
import PropTypes from 'prop-types'
import { PositiveNumberFormat } from '../Shared'
import UTextField from '../UTextField'
/**
 * UPositiveInteger form input field that accepts positive integer values. It is a extended version of UTextField.
 */
function ForwardRefUPositiveInteger(
  { readOnly, slotProps = {}, ...rest },
  ref
) {
  console.log('ForwardRefUPositiveInteger', rest)
  return (
    <UTextField
      variant="outlined"
      {...rest}
      slotProps={{
        ...slotProps,
        input: {
          ...(slotProps?.input ? slotProps.input : {}),
          inputComponent: PositiveNumberFormat,
          readOnly,
        },
      }}
      fullWidth
      ref={ref}
    />
  )
}
const UPositiveInteger = React.forwardRef(ForwardRefUPositiveInteger)

export default UPositiveInteger
// It accepts all the Material Ui TextField props
UPositiveInteger.propTypes = {
  // To make Textfield read only
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
}
