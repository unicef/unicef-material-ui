import React from 'react'
import { PositiveNumberFormat } from '../Shared'
import UTextField, { UTextFieldProps } from '../UTextField'

export interface UCoordinateFieldProps extends Omit<UTextFieldProps, 'validators' | 'variant' | 'fullWidth'> {
  // To make Text field read only
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
  /** No of decimal digits */
  decimalScale?: number
  /** Coordinate type */
  coordinateType: 'latitude' | 'longitude'
}

/**
 * UCoordinateField is a UTextField component with latitude and longitude validation.
 *
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://mui.com/material-ui/api/text-field/#textfield-api).
 *
 * It accepts all the TextField props and styles
 *
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */
export default function UCoordinateField({
  readOnly,
  decimalScale = 9,
  coordinateType,
  validators,
  slotProps,
  ...props
}: UCoordinateFieldProps) {
  let validatorsArr: string[] | null = null
  // add validator rule for latitude
  if (coordinateType === 'latitude') {
    validatorsArr = ['isLatitude']
  }
  // add validator rule for longitude
  if (coordinateType === 'longitude') {
    validatorsArr = ['isLongitude']
  }
  if (validators && validators.length && Array.isArray(validators)) {
    validatorsArr = [...validators, ...(validatorsArr || [])]
  }
  return (
    <UTextField
      variant="outlined"
      slotProps={{
        ...slotProps,
        input: {
          inputComponent: PositiveNumberFormat,
          readOnly,
          ...(slotProps?.input ? slotProps.input : {}),
        },
        htmlInput: {
          ...(slotProps?.htmlInput ? slotProps.htmlInput : {}),
          thousandSeparator: false,
          allowNegative: true,
          decimalScale,
        },
      }}
      validators={validatorsArr || validators}
      {...props}
      fullWidth
    />
  )
}

