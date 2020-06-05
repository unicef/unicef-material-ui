import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

export default function PositiveNumberFormat({
  inputRef,
  name,
  onChange,
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
      thousandSeparator
      isNumericString={false}
      allowNegative={false}
      decimalScale={0}
    />
  )
}

PositiveNumberFormat.propTypes = {
  // input ref
  inputRef: PropTypes.func.isRequired,
  // On each onChange value will be formatted
  onChange: PropTypes.func.isRequired,
}
