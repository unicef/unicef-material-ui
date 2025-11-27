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
}) {
  const readOnly = TextFieldProps && TextFieldProps.readOnly
  //In order to prevent the addition of these custom attributes to the DOM, we are separating them from TextFieldProps
  const {
    showLabelHelp = false,
    slotProps = {},
    InputLabelHelpProps = {},
    lineByLineOption = '',
    hideAvatar = false,
    ...otherTextFieldProps
  } = TextFieldProps || {}
  return (
    <TextField
      fullWidth
      variant="outlined"
      slotProps={{
        input: {
          inputComponent: InputComponent,
          classes: {
            root: `${readOnly && classes.inputHover}`,
            notchedOutline: `${!readOnly ? '' : classes.notchedOutline}`,
          },
        },
        htmlInput: {
          className: classes.input,
          ref: innerRef,
          children,
          readOnly: Boolean(readOnly),
          disabled: Boolean(readOnly),
          ...innerProps,
        },
        inputLabel: {
          ...(slotProps?.inputLabel ? slotProps?.inputLabel : {}),
          style: { ...styles.labelRoot },
        },
      }}
      {...otherTextFieldProps}
      type={null} // To prevent type attribute added in the div container
      label={
        showLabelHelp ? (
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
