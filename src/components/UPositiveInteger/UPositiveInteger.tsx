import React from 'react'
import { PositiveNumberFormat } from '../Shared'
import UTextField from '../UTextField'
import { TextFieldProps } from '@mui/material'

export interface UPositiveIntegerProps extends Omit<TextFieldProps, 'variant' | 'fullWidth'> {
  // To make Textfield read only
  readOnly?: boolean
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required']}`
   */
  validators?: string[]
  /**
   * customErrorMessages is an object with key as validator and value as customised error message.
   *
   * Ex: `customErrorMessages={{required: 'This field is required'}`
   */
  customErrorMessages?: Record<string, string>
  /** Name of input. */
  name?: string
  /** It triggers after each validation.It will return true or false. */
  validatorListener?: (isValid: boolean) => void
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator?: boolean
}

/**
 * UPositiveInteger form input field that accepts positive integer values. It is a extended version of UTextField.
 */
const UPositiveInteger = React.forwardRef<HTMLDivElement, UPositiveIntegerProps>(
  ({ readOnly, slotProps = {}, ...rest }, ref) => {
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
)

UPositiveInteger.displayName = 'UPositiveInteger'

export default UPositiveInteger

