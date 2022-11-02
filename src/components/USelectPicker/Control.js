import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import InputComponent from './InputComponent'
import { InputLabelHelp } from '../Shared'

const styles = {
  labelRoot: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  inputHover: {
    '&:hover $notchedOutline': {
      borderColor: 'transparent',
    },
  },
  notchedOutline: {
    borderRadius: 2,
    borderColor: 'transparent',
  },
}

export default function Control({
  children,
  innerProps,
  innerRef,
  selectProps: { classes, TextFieldProps },
  InputLabelProps,
}) {
  const readOnly = TextFieldProps && TextFieldProps.readOnly
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
          readOnly: Boolean(readOnly),
          disabled: Boolean(readOnly),
          ...innerProps,
        },
        classes: {
          root: `${readOnly && classes.inputHover}`,
          notchedOutline: `${!readOnly ? '' : classes.notchedOutline}`,
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
            {...TextFieldProps.inputlabelhelpprops}
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
