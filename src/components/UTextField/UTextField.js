import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
import ToggleButton from '@material-ui/lab/ToggleButton';

class UTextField extends ValidatorComponent {

  render() {
    const { errorMessages, validators, requiredError, value, ...rest } = this.props;

    return (
      <div>
        <ToggleButton
          {...rest}
          ref={(r) => { this.input = r; }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    const style = {
      right: 0,
      fontSize: '12px',
      position: 'absolute',
      marginTop: '-25px',
    };

    return (
      <div style={style}>
        {this.getErrorMessage()}
      </div>
    );
  }
}

export default UTextField;
