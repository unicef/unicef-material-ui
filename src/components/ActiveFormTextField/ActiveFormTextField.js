import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import UTextField from '../UTextField'

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
  },
  notchedOutline: {
    borderRadius: 2,
    borderColor: 'transparent',
  },
  inputPaddingWithoutLabel: props => ({
    padding: props.inputPadding ? props.inputPadding : '2px 2px 2px 2px',
    height: 'auto',
  }),
  inputPaddingWithLabel: props => ({
    padding: props.inputPadding ? props.inputPadding : '9.5px 14px',
    height: 'auto',
  }),
  input: props => ({
    ...theme.typography[props.typographyVariant],
  }),
  inputHover: {
    '&:hover $notchedOutline': {
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
 * Which is made by overriding some input styles and props from [TextFieldAPI](https://material-ui.com/api/text-field/#textfield-api).
 *
 * It accepts all the TextField props and styles
 *
 * It must be wrapped inside UValidatorForm Component and even if you don't want to use validation.
 *
 */
export default function ActiveFormTextField(props) {
  const classes = useStyles(props)
  const {
    typographyVariant,
    className,
    variant,
    readOnly,
    placeholder,
    interactiveMode,
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
      variant={variant || 'outlined'}
      defaultValue={props.children}
      {...others}
    />
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
  customErrorMessages: PropTypes.array,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Name of input. */
  name: PropTypes.string,
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
}

ActiveFormTextField.defaultProps = {
  placeholder: 'Type something',
  interactiveMode: false,
}
