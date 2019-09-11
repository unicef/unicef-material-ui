import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ValidatorComponent } from 'react-material-ui-form-validator';

class CheckboxValidatorElement extends ValidatorComponent {

  render() {
    const { errorMessages, validators, validatorListener, requiredError, value, ...rest } = this.props

    return (
      <div>
        <Checkbox
          {...rest}
          ref={(r) => { this.input = r; }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state

    if (isValid) {
      return null;
    }

    const style = {
      right: 0,
      fontSize: '12px',
      color: 'red',
      position: 'relative',
    };

    return (
      <div style={style}>
        {this.getErrorMessage()}
      </div>
    );
  }
}

export default CheckboxValidatorElement;