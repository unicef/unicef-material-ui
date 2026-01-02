import React from 'react'
import ActiveFormPositiveInteger, { ActiveFormPositiveIntegerProps } from '../ActiveFormPositiveInteger'

export interface ActiveCurrencyFieldProps extends Omit<ActiveFormPositiveIntegerProps, 'variant'> {
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
 * The ActiveCurrencyField is for creating currency input fields. It accepts several props for customization, including "inputPrefix," "decimalScale," "fixedDecimalScale," "textAlign," and etc. The cool feature with ActiveCurrencyField is you can read and write at the same place.
 */
export default function ActiveCurrencyField({
  inputPrefix = '$ ',
  decimalScale = 2,
  fixedDecimalScale = true,
  textAlign = 'right',
  slotProps,
  ...props
}: ActiveCurrencyFieldProps) {
  return (
    <ActiveFormPositiveInteger
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

