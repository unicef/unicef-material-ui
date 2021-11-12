import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import InputComponent from './InputComponent'
import { InputLabelHelp } from '../../components/Shared'

const styles = {
  labelRoot: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
}

export default function Control({
  children,
  innerProps,
  innerRef,
  selectProps: { classes, TextFieldProps },
  InputLabelProps,
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
      InputLabelProps={{
        ...InputLabelProps,
        style: { ...styles.labelRoot },
      }}
      {...TextFieldProps}
      label={
        TextFieldProps.showLabelHelp ? (
          <InputLabelHelp
            inputLabel={TextFieldProps.label}
            {...TextFieldProps.InputLabelHelpProps}
          />
        ) : (
          TextFieldProps.label
        )
      }
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
