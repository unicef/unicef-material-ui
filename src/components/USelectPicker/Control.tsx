import React from 'react'
import TextField from '@mui/material/TextField'
import InputComponent from './InputComponent'
import { InputLabelHelp } from '../Shared'
import { ControlProps } from 'react-select'
import { SelectOption } from './Option'

const styles = {
  labelRoot: {
    pointerEvents: 'auto' as const,
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

export interface CustomControlProps extends ControlProps<SelectOption, boolean> {
  selectProps?: {
    classes?: {
      inputHover?: string
      notchedOutline?: string
      input?: string
    }
    TextFieldProps?: {
      readOnly?: boolean
      showLabelHelp?: boolean
      slotProps?: Record<string, any>
      InputLabelHelpProps?: Record<string, any>
      lineByLineOption?: boolean | string
      hideAvatar?: boolean
      label?: string
      [key: string]: any
    }
  }
}

// Import SelectOption type
import { SelectOption } from './Option'

export default function Control({
  children,
  innerProps,
  innerRef,
  selectProps: { classes, TextFieldProps },
}: CustomControlProps) {
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
            root: `${readOnly && classes?.inputHover}`,
            notchedOutline: `${!readOnly ? '' : classes?.notchedOutline}`,
          },
        },
        htmlInput: {
          className: classes?.input,
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
      type={null as any} // To prevent type attribute added in the div container
      label={
        showLabelHelp ? (
          <InputLabelHelp
            inputLabel={TextFieldProps?.label}
            {...TextFieldProps?.InputLabelHelpProps}
          />
        ) : (
          TextFieldProps?.label
        )
      }
    />
  )
}

