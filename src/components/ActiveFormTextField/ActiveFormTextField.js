import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
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
})(({ theme, typographyVariant, inputPadding }) => ({
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
    ...theme.typography[typographyVariant],
  },

  [`& .${classes.inputHover}`]: {
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: 'transparent',
    },
  },
}))

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
export default function ActiveFormTextField(props) {
  const {
    typographyVariant,
    className,
    variant = 'outlined',
    readOnly,
    placeholder = 'Type something',
    interactiveMode = false,
    InputLabelProps,
    InputProps,
    inputProps,
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
        InputLabelProps={{
          shrink: true,
          ...InputLabelProps,
        }}
        inputProps={{
          readOnly: Boolean(readOnly),
          disabled: Boolean(readOnly),
          ...inputProps,
        }}
        className={`${classes.textField} ${className && className}`}
        InputProps={{
          classes: {
            root: `${classes.input} ${readOnly && classes.inputHover}`,
            multiline: inputPaddingClass,
            notchedOutline: `${
              !interactiveMode && !readOnly ? '' : classes.notchedOutline
            }`,
            input: props.multiline
              ? classes.inputPaddingWithoutLabel
              : inputPaddingClass,
          },
          ...InputProps,
        }}
        variant={variant}
        defaultValue={props.children}
        {...others}
      />
    </StyledBox>
  )
}

ActiveFormTextField.propTypes = {
  /** label */
  label: PropTypes.string,
  /** placeholder text*/
  placeholder: PropTypes.string,
  /** Typography for text inside the input (Ex: h1, div, etc.) */
  typographyVariant: PropTypes.string,
  /** Input has some default padding already, to make changes to it pass padding like `inputPadding='0px 2px'` */
  inputPadding: PropTypes.string,
  /** Change to write mode by hiding textfield border and displays border on Hover*/
  interactiveMode: PropTypes.bool,
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['required', 'isEmail']}`
   */
  validators: PropTypes.array,
  /**
   * customErrorMessages is an object with key as validator and value as customised error message.
   *
   * Ex: `customErrorMessages={{required: 'This field is required'}`
   */
  customErrorMessages: PropTypes.object,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Name of input. */
  name: PropTypes.string,
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
}
