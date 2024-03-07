/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { ValidatorComponent } from 'react-form-validator-core'

class ValidatorComponentNew extends ValidatorComponent {
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
}

ValidatorComponentNew.propTypes = {
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
  containerProps: PropTypes.object,
}

ValidatorComponentNew.defaultProps = {
  customErrorMessages: 'error',
  validators: [],
  validatorListener: () => {},
  withRequiredValidator: true,
}

export default ValidatorComponentNew

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
