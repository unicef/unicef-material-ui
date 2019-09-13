import React from 'react';
import { Checkbox, FormHelperText } from '@material-ui/core'
import { ValidatorComponent } from 'react-material-ui-form-validator'

class UCheckbox extends ValidatorComponent {

  render() {

    return (
      <div>
        {this.props.children}
        {this.errorText()}
      </div>
    )
  }

  errorText() {

    if (this.props.isValid) {
      return null;
    }

    return (
      <FormHelperText error>
        {this.getErrorMessage()}
      </FormHelperText>
    )
  }
}

export default UCheckbox