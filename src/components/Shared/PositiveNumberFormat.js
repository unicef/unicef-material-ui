import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

export default function PositiveNumberFormat(props) {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
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

PossitiveNumberFormat.propTypes = {
  // input ref
  inputRef: PropTypes.func.isRequired,
  // On each onChange value will be formatted
  onChange: PropTypes.func.isRequired,
}
