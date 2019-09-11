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
        <Checkbox
          {...rest}
          ref={(r) => { this.input = r }}
        />
        {this.errorText()}
      </div>
    )
  }

  errorText() {
    const { isValid } = this.state

    if (isValid) {
      return null;
    }

    return (
      <FormHelperText error>
        {this.getErrorMessage()}
      </FormHelperText>
    )
  }
}

export default CheckboxValidatorElement