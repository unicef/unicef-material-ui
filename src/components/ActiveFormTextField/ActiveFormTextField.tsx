import React from 'react'
import { styled, SxProps, Theme } from '@mui/material/styles'
import { Box } from '@mui/material'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import UTextField from '../UTextField'

const PREFIX = 'ActiveFormTextField'

const classes = {
  textField: `${PREFIX}-textField`,
  notchedOutline: `${PREFIX}-notchedOutline`,
  inputPaddingWithoutLabel: `${PREFIX}-inputPaddingWithoutLabel`,
  inputPaddingWithLabel: `${PREFIX}-inputPaddingWithLabel`,
  input: `${PREFIX}-input`,
  inputHover: `${PREFIX}-inputHover`,
}

const StyledBox = styled(Box, {
  shouldForwardProp: prop =>
    prop !== 'typographyVariant' &&
    prop !== 'inputPadding' &&
    prop !== 'errorMessages',
})<{ typographyVariant?: string; inputPadding?: string }>(({ theme, typographyVariant, inputPadding }) => ({
  [`& .${classes.textField}`]: {
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
  },

  [`& .${classes.notchedOutline}`]: {
    borderRadius: 2,
    borderColor: 'transparent',
  },

  [`& .${classes.inputPaddingWithoutLabel}`]: {
    padding: inputPadding ? inputPadding : '2px 2px 2px 2px',
    height: 'auto',
  },

  [`& .${classes.inputPaddingWithLabel}`]: {
    padding: inputPadding ? inputPadding : '9.5px 14px',
    height: 'auto',
  },

  [`& .${classes.input}`]: {
    ...(typographyVariant && theme.typography[typographyVariant as keyof typeof theme.typography]
      ? theme.typography[typographyVariant as keyof typeof theme.typography]
      : {}),
  },

  [`& .${classes.inputHover}`]: {
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'transparent',
    },
  },
}))

export interface ActiveFormTextFieldProps {
  /** label */
  label?: string
  /** placeholder text*/
  placeholder?: string
  /** Typography for text inside the input (Ex: h1, div, etc.) */
  typographyVariant?: string
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding?: string
  /** Change to write mode by hiding textfield border and displays border on Hover*/
  interactiveMode?: boolean
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required', 'isEmail']}`
   */
  validators?: string[]
  /**
   * customErrorMessages is an object with key as validator and value as customised error message.
   *
   * Ex: `customErrorMessages={{required: 'This field is required'}`
   */
  customErrorMessages?: Record<string, string>
  /** To make the content readOnly */
  readOnly?: boolean
  /** Name of input. */
  name?: string
  /** It triggers after each validation.It will return true or false. */
  validatorListener?: (isValid: boolean) => void
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator?: boolean
  /** Material ui textfield variant */
  variant?: 'outlined' | 'filled' | 'standard'
  /** className */
  className?: string
  /** multiline */
  multiline?: boolean
  /** children */
  children?: React.ReactNode
  /** value */
  value?: string | number
  /** onChange */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** slotProps */
  slotProps?: Record<string, any>
}

/**
 * ActiveFormTextField is a UTextField component with form validation.
 * The cool feature with ActiveFormTextField is you can read and write at the same place.
 * * Read the content inside TextField
 * * Edit the TextField
 *
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://mui.com/material-ui/api/text-field/).
 *
 * It accepts all the TextField props and styles
 *
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */
export default function ActiveFormTextField(props: ActiveFormTextFieldProps) {
  const {
    typographyVariant,
    className,
    variant = 'outlined',
    readOnly,
    placeholder = 'Type something',
    interactiveMode = false,
    slotProps = {},
    inputPadding,
    ...others
  } = props
  const inputPaddingClass = props.label
    ? classes.inputPaddingWithLabel
    : classes.inputPaddingWithoutLabel
  const finalPlaceholder = readOnly ? null : placeholder

  return (
    <StyledBox
      typographyVariant={typographyVariant}
      inputPadding={inputPadding}
    >
      <UTextField
        placeholder={finalPlaceholder}
        className={`${classes.textField} ${className || ''}`}
        slotProps={{
          ...slotProps,
          input: {
            classes: {
              root: `${classes.input} ${readOnly ? classes.inputHover : ''}`,
              multiline: inputPaddingClass,
              notchedOutline: `${
                !interactiveMode && !readOnly ? '' : classes.notchedOutline
              }`,
              input: props.multiline
                ? classes.inputPaddingWithoutLabel
                : inputPaddingClass,
            },
            ...(slotProps?.input ? slotProps.input : {}),
          },
          htmlInput: {
            readOnly: Boolean(readOnly),
            disabled: Boolean(readOnly),
            ...(slotProps?.htmlInput ? slotProps.htmlInput : {}),
          },
          inputLabel: {
            shrink: true,
            ...(slotProps?.inputLabel ? slotProps.inputLabel : {}),
          },
        }}
        variant={variant}
        defaultValue={props.children}
        {...others}
      />
    </StyledBox>
  )
}

