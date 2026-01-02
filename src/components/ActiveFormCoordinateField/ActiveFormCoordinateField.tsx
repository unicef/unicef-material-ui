import React from 'react'
import ActiveFormTextField, { ActiveFormTextFieldProps } from '../ActiveFormTextField'
import { PositiveNumberFormat } from '../Shared'

export interface ActiveFormCoordinateFieldProps
  extends Omit<ActiveFormTextFieldProps, 'variant' | 'fullWidth' | 'validators'> {
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding?: string
  /** To hide or display the text field border*/
  showBorder?: boolean
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required']}`
   */
  validators?: string[]
  /** No of decimal digits */
  decimalScale?: number
  /** Coordinate type */
  coordinateType: 'latitude' | 'longitude'
}

/**
 * ActiveFormCoordinateField is a UTextField component with latitude and longitude validation.
 * The cool feature with ActiveFormCoordinateField is you can read and write at the same place.
 * * Read the content inside TextField
 * * Edit the TextField
 *
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://mui.com/material-ui/api/text-field/#textfield-api).
 *
 * It accepts all the TextField props and styles
 *
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */

export default function ActiveFormCoordinateField({
  slotProps,
  decimalScale = 9,
  coordinateType,
  validators,
  ...props
}: ActiveFormCoordinateFieldProps) {
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
    <ActiveFormTextField
      variant="outlined"
      slotProps={{
        ...slotProps,
        input: {
          ...(slotProps?.input ? slotProps.input : {}),
          inputComponent: PositiveNumberFormat,
        },
        htmlInput: {
          ...(slotProps?.htmlInput ? slotProps.htmlInput : {}),
          thousandSeparator: false,
          allowNegative: true,
          decimalScale: decimalScale,
        },
      }}
      validators={validatorsArr || validators}
      fullWidth
      {...props}
    />
  )
}

