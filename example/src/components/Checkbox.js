import React from 'react';
import { Checkbox, FormHelperText } from '@material-ui/core'
import { ValidatorComponent } from 'react-material-ui-form-validator';

class CheckboxValidatorElement extends ValidatorComponent {

  state = {
    isValid: this.props.value
  }

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

export default CheckboxValidatorElement