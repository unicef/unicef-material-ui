import React from 'react'
import PropTypes from 'prop-types'
import { FormHelperText } from '@mui/material'
import ValidatorComponent from '../ValidatorComponent'
//import { ValidatorComponent } from 'react-form-validator-core'

//Extending the ValidatorComponent using class component, so taking an exclusion from our rule: functional components only.
/**
 * * UValidatorComponent is custom component for form validation other than textfield.
 * * UValidatorComponent is a [ValidatorComponent](https://www.npmjs.com/package/react-form-validator-core) from `react-form-validator-core` and must be wrapped inside its parent component UValidatorForm.
 * * UValidatorComponent can be used for Checkboxes and radio buttons and some other components to validate with our own validation rules.
 * * See the Usage below for more details.
 */
export default class UValidatorComponent extends ValidatorComponent {
  renderValidatorComponent() {
    const {
      customErrorMessages,
      validators,
      validatorListener,
      requiredError,
      value,
      ...rest
    } = this.props

    return (
      <div>
        {this.props.children}
        {this.errorText()}
      </div>
    )
  }

  errorText() {
    const { isValid } = this.state
    const formHelperId = this.props.formHelperId || ''
    return (
      <FormHelperText
        style={{ marginLeft: '8px', marginTop: 0 }}
        error
        id={formHelperId}
      >
        {!isValid && this.getErrorMessage()}
      </FormHelperText>
    )
  }
}

UValidatorComponent.propTypes = {
  /**
   * Array of validators.See list of default validators above.
   *
   * Ex: `validators={['isTruthy']}`
   */
  validators: PropTypes.array,
  /**
   * customErrorMessages is an object with key as validator and value as customised error message.
   *
   * Ex: `customErrorMessages={{isTruthy: 'choose an option from above'}`
   */
  customErrorMessages: PropTypes.object,
  /** It triggers after each validation.It will return true or false. */
  validatorListener: PropTypes.func,
  /** Allow to use required validator in any validation trigger, not only form submit. */
  withRequiredValidator: PropTypes.bool,
  /** you must provide this prop, it will be used only for validation. */
  value: PropTypes.any.isRequired,
  /** Form helper id. It is a Id associated with the input */
  formHelperId: PropTypes.string,
}
