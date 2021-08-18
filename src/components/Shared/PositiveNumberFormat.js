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
  ...other
}) {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: name,
            value: values.value,
          },
        })
      }}
      thousandSeparator={thousandSeparator}
      isNumericString={isNumericString}
      allowNegative={allowNegative}
      decimalScale={decimalScale}
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
}

PositiveNumberFormat.defaultProps = {
  thousandSeparator: true,
  isNumericString: false,
  allowNegative: false,
  decimalScale: 0,
}
