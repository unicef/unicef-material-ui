import React from 'react'
import PropTypes from 'prop-types'
import { NumericFormat } from 'react-number-format'

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
}) {
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

PositiveNumberFormat.propTypes = {
  // field value
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // Input ref
  inputRef: PropTypes.func,
  // On each onChange value will be formatted
  onChange: PropTypes.func.isRequired,
  // callback function to be called on blur
  onBlur: PropTypes.func,
  // Thousand separator
  thousandSeparator: PropTypes.bool,
  // Value is numeric string
  valueIsNumericString: PropTypes.bool,
  // Is allow negative numbers
  allowNegative: PropTypes.bool,
  // No of decimal digits
  decimalScale: PropTypes.number,
  //If true it add 0s to match given decimalScale.
  fixedDecimalScale: PropTypes.bool,
}
