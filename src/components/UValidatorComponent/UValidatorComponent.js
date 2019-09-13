import React from 'react';
import { FormHelperText } from '@material-ui/core'
import { ValidatorComponent } from 'react-material-ui-form-validator';

//Extending the ValidatorComponent using class component, so taking an exclusion from our rule: functional components only.
export default class UValidatorComponent extends ValidatorComponent {

  render() {
    const { errorMessages, validators, validatorListener, requiredError, value, ...rest } = this.props


    return (
      <div>
        {this.props.children}
        {this.errorText()}
      </div>
    )
  }

  errorText() {
    const { isValid } = this.state
    return (
      <FormHelperText style={{ marginLeft: '8px', marginTop: 0 }} error>
        {!isValid && this.getErrorMessage()}
      </FormHelperText>
    )
  }
}
