/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Promise from 'promise-polyfill'
/* eslint-enable */
import { polyfill } from 'react-lifecycles-compat'
import { ValidatorForm } from 'react-form-validator-core'
import { debounce } from '../../utils'

/**
 * ValidatorComponent
 * Using component locally in order to override the error messages
 * TODO - write the code to newer version
 */
export default class ValidatorComponent extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.validators &&
      nextProps.customErrorMessages &&
      nextProps.withRequiredValidator &&
      (prevState.validators !== nextProps.validators ||
        prevState.customErrorMessages !== nextProps.customErrorMessages)
    ) {
      return {
        value: nextProps.value,
        validators: nextProps.validators,
        customErrorMessages: nextProps.customErrorMessages,
        withRequiredValidator: nextProps.withRequiredValidator,
      }
    }

    return {
      value: nextProps.value,
    }
  }

  state = {
    isValid: true,
    value: this.props.value,
    customErrorMessages: this.props.customErrorMessages,
    validators:
      this.props.validators !== undefined ? this.props.validators : [],
    withRequiredValidator:
      this.props.withRequiredValidator !== undefined
        ? this.props.withRequiredValidator
        : true,
  }

  componentDidMount() {
    this.configure()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || this.props !== nextProps
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.instantValidate && this.props.value !== prevState.value) {
      this.validateDebounced(this.props.value, this.state.withRequiredValidator)
    }
  }

  componentWillUnmount() {
    this.context.form.detachFromForm(this)
    this.validateDebounced.cancel()
  }

  getErrorMessage = () => {
    const { validators, customErrorMessages } = this.state
    const type = typeof validators
    if (type === 'string') {
      return customErrorMessages
    } else if (type === 'object') {
      let updatedErrorMessages = []
      if (this.invalid.length > 0) {
        validators &&
          validators.map(validator => {
            if (customErrorMessages && customErrorMessages[validator]) {
              updatedErrorMessages.push(customErrorMessages[validator])
            } else if (defaultErrorMessages[validator]) {
              updatedErrorMessages.push(defaultErrorMessages[validator])
            }
          })
      }
      return updatedErrorMessages[this.invalid[0]]
    }
    // eslint-disable-next-line
    console.log('unknown errorMessages type', validators)
    return true
  }

  instantValidate = true
  invalid = []

  configure = () => {
    this.context.form.attachToForm(this)
    this.instantValidate = this.context.form.instantValidate
    this.debounceTime = this.context.form.debounceTime
    this.validateDebounced = debounce(this.validate, this.debounceTime)
  }

  validate = (value, includeRequired = false, dryRun = false) => {
    const validations = Promise.all(
      this.state.validators.map(validator =>
        ValidatorForm.getValidator(validator, value, includeRequired)
      )
    )

    validations.then(results => {
      this.invalid = []
      let valid = true
      results.forEach((result, key) => {
        if (!result) {
          valid = false
          this.invalid.push(key)
        }
      })
      if (!dryRun) {
        this.setState({ isValid: valid }, () => {
          this.props.validatorListener(this.state.isValid)
        })
      }
    })
  }

  isValid = () => this.state.isValid

  makeInvalid = () => {
    this.setState({ isValid: false })
  }

  makeValid = () => {
    this.setState({ isValid: true })
  }
}

ValidatorComponent.contextTypes = {
  form: PropTypes.object,
}

ValidatorComponent.propTypes = {
  /** Custom error messages to override default error messages */
  customErrorMessages: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  /** List of validators to handle*/
  validators: PropTypes.array,
  /** Value */
  value: PropTypes.any,
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
}

ValidatorComponent.defaultProps = {
  customErrorMessages: 'error',
  validators: [],
  validatorListener: () => {},
  withRequiredValidator: true,
}

polyfill(ValidatorComponent)

// default error messages to return
const defaultErrorMessages = {
  required: 'Required',
  isEmail: 'Invalid email. Example: user@domain.com',
  isEmpty: 'Cannot be empty',
  isNumber: 'Must be number',
  isPositive: 'Must be positive',
  isString: 'Must be string',
  isFloat: 'Must be a number',
  minNumber: 'Must be larger',
  maxNumber: 'Must be smaller',
  minFloat: 'Must be larger',
  maxFloat: 'Must be smaller',
  trim: 'Only white space characters in value',
  minStringLength: 'Too short',
  maxStringLength: 'Too long',
  maxFileSize: 'Maximum file size exceeded',
  matchRegexp: 'Invalid value',
  allowedExtensions: 'File type not allowed',
  isUrl: 'It should start with http:// or https://',
  isLatitude: 'It should be between -90 and 90',
  isLongitude: 'It should be between -180 and 180',
  isPhone: 'Only numbers,(,),-,.,# and (ext) are allowed',
  isSafeText: 'HTML not allowed',
  isAlphanumeric: 'Only letters and numbers are allowed',
}
