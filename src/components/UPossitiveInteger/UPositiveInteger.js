import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'

function PossitiveNumberFormat(props) {
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

export default function UPositiveInteger({ readOnly, InputProps, ...props }) {
  return (
    <TextField
      variant="outlined"
      InputProps={{
        inputComponent: PossitiveNumberFormat,
        readOnly: readOnly,
        ...InputProps,
      }}
      {...props}
      fullWidth
    />
  )
}

// It accepts all the Material Ui TextField props
UPositiveInteger.propTypes = {
  // To make Textfield read only
  readOnly: PropTypes.bool,
}
