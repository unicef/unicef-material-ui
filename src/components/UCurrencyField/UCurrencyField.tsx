import React from 'react'
import UPositiveInteger, { UPositiveIntegerProps } from '../UPositiveInteger'

export interface UCurrencyFieldProps extends Omit<UPositiveIntegerProps, 'variant'> {
  /** Prefix string for the input. */
  inputPrefix?: string
  /** Decimal digit number to be used as default. */
  decimalScale?: number
  /** Input text align */
  textAlign?: 'left' | 'right' | 'center'
  // If true it add 0s to match given decimalScale.
  fixedDecimalScale?: boolean
}

/**
 * The UCurrencyField is for creating currency input fields. It accepts several props for customization, including "inputPrefix," "decimalScale," "fixedDecimalScale," "textAlign," and etc
 */
export default function UCurrencyField({
  inputPrefix = '$ ',
  decimalScale = 2,
  fixedDecimalScale = true,
  textAlign = 'right',
  slotProps = {},
  ...props
}: UCurrencyFieldProps) {
  return (
    <UPositiveInteger
      variant="outlined"
      slotProps={{
        ...slotProps,
        htmlInput: {
          ...(slotProps?.htmlInput ? slotProps.htmlInput : {}),
          decimalScale,
          fixedDecimalScale,
          prefix: inputPrefix,
          style: { textAlign },
        },
      }}
      {...props}
    />
  )
}

