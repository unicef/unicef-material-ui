import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

export default function PositiveNumberFormat({
  inputRef,
  name,
  onChange,
  thousandSeparator,
  isNumericString,
  allowNegative,
  decimalScale,
  fixedDecimalScale,
  ...other
}) {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
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
      isNumericString={isNumericString}
      allowNegative={allowNegative}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
    />
  )
}

PositiveNumberFormat.propTypes = {
  // Input ref
  inputRef: PropTypes.func.isRequired,
  // On each onChange value will be formatted
  onChange: PropTypes.func.isRequired,
  // Thousand separator
  thousandSeparator: PropTypes.bool,
  // Is numeric string
  isNumericString: PropTypes.bool,
  // Is allow negative numbers
  allowNegative: PropTypes.bool,
  // No of decimal digits
  decimalScale: PropTypes.number,
  //If true it add 0s to match given decimalScale.
  fixedDecimalScale: PropTypes.bool,
}

PositiveNumberFormat.defaultProps = {
  thousandSeparator: true,
  isNumericString: false,
  allowNegative: false,
  decimalScale: 0,
  fixedDecimalScale: false,
}
