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
    InputLabelHelpProps = {},
    lineByLineOption = '',
    hideAvatar = false,
    slotProps = {},
    ...otherTextFieldProps
  } = TextFieldProps || {}
  return (
    <TextField
      fullWidth
      variant="outlined"
      // To prevent type attribute added in the div container
      type={null}
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
      slotProps={{
        ...slotProps,
        input: {
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
        },
        inputLabel: {
          ...(slotProps.inputLabel ? slotProps.inputLabel : {}),
          style: { ...styles.labelRoot },
        },
      }}
      {...otherTextFieldProps}
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
  /** The props used for each slot inside. */
  slotProps: PropTypes.object,
}
