/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Promise from 'promise-polyfill'
/* eslint-enable */
import { polyfill } from 'react-lifecycles-compat'
import { ValidatorForm } from 'react-form-validator-core'

class ValidatorComponent extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.validators &&
      nextProps.customErrorMessages &&
      (prevState.validators !== nextProps.validators ||
        prevState.customErrorMessages !== nextProps.customErrorMessages)
    ) {
      return {
        value: nextProps.value,
        validators: nextProps.validators,
        customErrorMessages: nextProps.customErrorMessages,
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
    validators: this.props.validators,
  }

  componentDidMount() {
    this.configure()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState || this.props !== nextProps
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.instantValidate && this.props.value !== prevState.value) {
      this.validateDebounced(this.props.value, this.props.withRequiredValidator)
    }
  }

  componentWillUnmount() {
    this.context.form.detachFromForm(this)
    this.validateDebounced.cancel()
  }

  getErrorMessage = () => {
    const { validators, customErrorMessages } = this.state
    const type = typeof validators
    if (type === 'object') {
      let updatedErrorMessages = []
      if (this.invalid.length > 0) {
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
  errorMessages: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  validators: PropTypes.array,
  value: PropTypes.any,
  validatorListener: PropTypes.func,
  withRequiredValidator: PropTypes.bool,
}

ValidatorComponent.defaultProps = {
  errorMessages: 'error',
  validators: [],
  validatorListener: () => {},
}

polyfill(ValidatorComponent)

// default error messages to return
const defaultErrorMessages = {
  required: 'this field is required',
  isEmail: 'this is not a valid email',
  isEmpty: 'value is empty',
  isNumber: 'value must be number',
  isPositive: 'value must be positive',
  isString: 'value must be string',
  isFloat: 'error',
  minNumber: 'error',
  maxNumber: 'error',
  minFloat: 'error',
  maxFloat: 'error',
  trim: 'error',
  minStringLength: 'error',
  maxStringLength: 'error',
  maxFileSize: 'error',
  matchRegexp: 'error',
  allowedExtensions: 'error',
}

const debounce = (func, wait, immediate) => {
  let timeout
  function cancel() {
    if (timeout !== undefined) {
      clearTimeout(timeout)
    }
  }
  const debounced = function debounced(...args) {
    const context = this
    const later = function delayed() {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  }
  debounced.cancel = cancel
  return debounced
}

export default ValidatorComponent
