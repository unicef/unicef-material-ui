import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import InputComponent from './InputComponent'

export default function Control({
  children,
  innerProps,
  innerRef,
  selectProps: { classes, TextFieldProps },
}) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      InputProps={{
        inputComponent: InputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  )
}

Control.propTypes = {
  /**
   * Children to render.
   */
  children: PropTypes.node,
  /**
   * The mouse down event and the innerRef to pass down to the controller element.
   */
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func,
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any,
    }),
  ]),
}
