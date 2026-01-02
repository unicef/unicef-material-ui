import React from 'react'
import ActiveFormTextField, { ActiveFormTextFieldProps } from '../ActiveFormTextField'
import { PositiveNumberFormat } from '../Shared'

export interface ActiveFormPositiveIntegerProps extends Omit<ActiveFormTextFieldProps, 'variant' | 'fullWidth'> {
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding?: string
  /** To hide or display the textfied border*/
  showBorder?: boolean
}

/**
 * ActiveFormPositiveInteger form input field that accepts positive integer values. The cool feature with ActiveFormPositiveInteger is you can read and write at the same place.
 */
export default function ActiveFormPositiveInteger({ slotProps, ...props }: ActiveFormPositiveIntegerProps) {
  return (
    <ActiveFormTextField
      variant="outlined"
      slotProps={{
        ...slotProps,
        input: {
          ...(slotProps?.input ? slotProps.input : {}),
          inputComponent: PositiveNumberFormat,
        },
      }}
      {...props}
      fullWidth
    />
  )
}

