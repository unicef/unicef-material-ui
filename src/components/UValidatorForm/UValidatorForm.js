import React from 'react'
import { ValidatorForm } from 'react-form-validator-core'
import PropTypes from 'prop-types'
import {
  isAlphanumericText,
  isPhoneNumberText,
  isSafeText,
  isUrlText,
} from '../../utils'

/**
 * * UValidatorForm is a component as similar to Form, it also has some set of validations for form that contains textfield, checkboxes, select, choice buttons.
 * * UValidatorForm has some features and functions like instantValidate, onSubmit, onError, debounceTime.
 * * Wherever we require form validation, UValidatorForm should be parent component , rest of the compoents should be wrapped under it.
 * * UValidatorForm is a [ValidatorForm Component](https://www.npmjs.com/package/react-form-validator-core) from `react-form-validator-core`.
 *  Check it if you need more details, we accept all the functions and props from ValidatorForm Component
 */

export default class UValidatorForm extends ValidatorForm {}

UValidatorForm.addValidationRule = (name, callback) => {
  ValidatorForm.addValidationRule(name, callback)
}

UValidatorForm.removeValidationRule = name => {
  ValidatorForm.removeValidationRule(name)
}

ValidatorForm.addValidationRule('isUrl', value => {
  return isUrlText(value)
})

ValidatorForm.addValidationRule('isLatitude', value => {
  if (value > 90 || value < -90) {
    return false
  }
  return true
})
ValidatorForm.addValidationRule('isLongitude', value => {
  if (value > 180 || value < -180) {
    return false
  }
  return true
})

ValidatorForm.addValidationRule('isPhone', value => {
  return isPhoneNumberText(value)
})

ValidatorForm.addValidationRule('isSafeText', value => {
  return isSafeText(value)
})

ValidatorForm.addValidationRule('isAlphanumeric', value => {
  return isAlphanumericText(value)
})

UValidatorForm.propTypes = {
  /** Callback for form that fires when all validations are passed */
  onSubmit: PropTypes.func,
  /** If true, form will be validated after each field change.If false, form will be validated only after clicking submit button. */
  instantValidate: PropTypes.bool,
  /** Callback for form that fires when some of validations are not passed.It will return array of elements which not valid. */
  onError: PropTypes.func,
  /** Debounce time for validation i.e.your validation will run after debounceTime ms when you stop changing your input. */
  debounceTime: PropTypes.number,
}

UValidatorForm.defaultProps = {
  instantValidate: true,
  debounceTime: 0,
  onSubmit: () => {},
}
