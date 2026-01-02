/* eslint-disable */
import React from 'react'
import { ValidatorComponent, ValidatorComponentProps, ValidatorComponentState } from 'react-form-validator-core'

class ValidatorComponentNew extends ValidatorComponent {
  getErrorMessage = (): string => {
    const { validators } = this.state
    const { customErrorMessages } = this.props
    const type = typeof validators
    if (type === 'string') {
      return typeof customErrorMessages === 'string' ? customErrorMessages : 'error'
    } else if (type === 'object') {
      let updatedErrorMessages: string[] = []
      if (this.invalid && this.invalid.length > 0) {
        validators &&
          validators.map((validator: string) => {
            if (
              typeof customErrorMessages === 'object' &&
              customErrorMessages &&
              customErrorMessages[validator]
            ) {
              updatedErrorMessages.push(customErrorMessages[validator])
            } else if (defaultErrorMessages[validator]) {
              updatedErrorMessages.push(defaultErrorMessages[validator])
            }
          })
      }
      return updatedErrorMessages[this.invalid[0]] || ''
    }
    // eslint-disable-next-line
    console.log('unknown errorMessages type', validators)
    return 'error'
  }
}

// Note: defaultProps is deprecated in React 18+, but keeping for compatibility
;(ValidatorComponentNew as any).defaultProps = {
  customErrorMessages: 'error',
  validators: [],
  validatorListener: () => {},
  withRequiredValidator: true,
}

export default ValidatorComponentNew

// default error messages to return
const defaultErrorMessages: Record<string, string> = {
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

