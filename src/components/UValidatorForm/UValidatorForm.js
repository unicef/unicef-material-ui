import React from 'react'
import { ValidatorForm } from 'react-form-validator-core'
import PropTypes from 'prop-types'

/**
 * * UValidatorForm is a component as similar to Form, it also has some set of validations for form that contains textfield, checkboxes, select, choice buttons.
 * * UValidatorForm has some features and functions like instantValidate, onSubmit, onError, debounceTime.
 * * Wherever we require form validation, UValidatorForm should be parent component , rest of the compoents should be wrapped under it.
 * * UValidatorForm is a [ValidatorForm Component](https://www.npmjs.com/package/react-form-validator-core) from `react-form-validator-core`.
 *  Check it if you need more details, we accept all the functions and props from ValidatorForm Component
 */

export default function UValidatorForm(props) {
  UValidatorForm.addValidationRule = (name, callback) => {
    ValidatorForm.addValidationRule(name, callback)
  }

  UValidatorForm.removeValidationRule = name => {
    ValidatorForm.removeValidationRule(name)
  }

  ValidatorForm.addValidationRule('isUrl', (value) => {
    let urlRegexp = new RegExp("^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$")
    if (value != '' && !urlRegexp.test(value)) {
      return false
    }
    return true
  })

  return <ValidatorForm {...props} />
}

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
  onSubmit: () => { },
}