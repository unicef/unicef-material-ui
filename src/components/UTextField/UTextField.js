/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Typography, Box } from '@material-ui/core'
/* eslint-enable */
import ValidatorComponent from '../ValidatorComponent'
import { withStyles } from '@material-ui/core'

const rootStyles = theme => ({
  root: {
    '& .Uni-MuiInputLabel-asterisk': {
      color: theme.palette.error.main,
    },
  },
  counter: {
    marginLeft: 16,
  },
  counterError: {
    color: theme.palette.error.main,
  },
})

//Extending the ValidatorComponent using class component, so taking an exclusion from our rule: functional components only.

/**
 * UTextField is a Material-ui TextField component with form validation.
 * UTextField is a [ValidatorComponent](https://www.npmjs.com/package/react-form-validator-core) from `react-form-validator-core` and must be wrapped inside its parent component UValidatorForm.
 *
 * Default validation rules:
 * * matchRegexp
 * * isEmail
 * * isUrl
 * * isEmpty
 * * required
 * * trim
 * * isNumber
 * * isFloat
 * * isPositive
 * * minNumber
 * * maxNumber
 * * minFloat
 * * maxFloat
 * * minStringLength
 * * maxStringLength
 * * isString
 * * maxFileSize
 * * allowedExtensions
 *
 * It accepts all the props of Material-ui [TextField](https://material-ui.com/api/text-field/#textfield-api)
 */
class UTextField extends ValidatorComponent {
  constructor(props) {
    super(props)
  }

  handleBlur = event => {
    const { isValid } = this.state
    const { error } = this.props
    if (!isValid || error) {
      return
    } else {
      this.props.onBlur && this.props.onBlur(event)
    }
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      variant,
      error,
      customErrorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      withRequiredValidator,
      onBlur,
      maxLength,
      counter,
      counterClassName,
      readOnly,
      InputProps,
      className,
      classes,
      ...rest
    } = this.props
    const { isValid } = this.state
    const length = this.props.value ? this.props.value.length : 0
    const counterError = maxLength && maxLength < length

    return (
      <React.Fragment>
        <TextField
          className={`${className && className} ${classes.root}`}
          variant={variant}
          {...rest}
          error={!isValid || error}
          onBlur={event => this.handleBlur(event)}
          helperText={(!isValid && this.getErrorMessage()) || helperText}
          InputProps={{
            readOnly: readOnly,
            ...InputProps,
          }}
        />
        {counter && (
          <Box display="block">
            <Typography
              className={`${classes.counter} ${
                counterError ? classes.counterError : ''
              }`}
              variant="caption"
              color="textSecondary"
            >
              {maxLength ? `${length}/${maxLength}` : length} characters
            </Typography>
          </Box>
        )}
      </React.Fragment>
    )
  }
}

UTextField.propTypes = {
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
  /** Name of input. */
  name: PropTypes.string,
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
  /** To make textfield to be select. See below examples section for select example and sample code */
  select: PropTypes.bool,
  /** To enable character counter */
  counter: PropTypes.bool,
  /** Maximum length of characters */
  maxLength: PropTypes.number,
  /** To make textfield read only */
  readOnly: PropTypes.bool,
  /** Props applied to the Input element. */
  InputProps: PropTypes.object,
}

UTextField.defaultProps = {
  variant: 'outlined',
  readOnly: false,
  validatorListener: () => {},
}

export default withStyles(rootStyles)(UTextField)
