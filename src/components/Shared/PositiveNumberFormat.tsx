import React from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'

export interface PositiveNumberFormatProps extends Omit<NumericFormatProps, 'value' | 'onChange' | 'onBlur' | 'getInputRef'> {
  // field value
  value?: number | string
  // Input ref
  inputRef?: (instance: HTMLInputElement | null) => void
  // On each onChange value will be formatted
  onChange: (event: { target: { name?: string; value: string }; sourceInfo?: any }) => void
  // callback function to be called on blur
  onBlur?: (event: { target: { name?: string; value: number | string } }) => void
  // Thousand separator
  thousandSeparator?: boolean
  // Value is numeric string
  valueIsNumericString?: boolean
  // Is allow negative numbers
  allowNegative?: boolean
  // No of decimal digits
  decimalScale?: number
  // If true it add 0s to match given decimalScale.
  fixedDecimalScale?: boolean
  name?: string
}

export default function PositiveNumberFormat({
  inputRef,
  name,
  value,
  onChange,
  onBlur,
  thousandSeparator = true,
  valueIsNumericString = false,
  allowNegative = false,
  decimalScale = 0,
  fixedDecimalScale = false,
  ...other
}: PositiveNumberFormatProps) {
  return (
    <NumericFormat
      {...other}
      value={value}
      getInputRef={inputRef}
      onBlur={() =>
        onBlur &&
        onBlur({
          target: {
            name: name,
            value: value,
          },
        })
      }
      onValueChange={(values, sourceInfo) => {
        onChange({
          target: {
            name: name,
            value: values.value,
          },
          sourceInfo,
        })
      }}
      thousandSeparator={thousandSeparator}
      valueIsNumericString={valueIsNumericString}
      allowNegative={allowNegative}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
    />
  )
}

