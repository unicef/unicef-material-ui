```jsx
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Checkbox, MenuItem, Radio, FormGroup, FormControl, FormLabel, FormControlLabel, RadioGroup, FormHelperText } from '@material-ui/core';
import UValidatorForm from '../UValidatorForm';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

// export default function FormValidator() {

  const form = useRef('form');

  const classes = useStyles();

  const [values, setValues] = useState(
    {
      react: false,
      angular: false,
      azure: false,
      redux: false,
    }
  );

  function handleChange(event) {
    setValueChoice(event.target.value);
  };

  function handleValue(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({ ...values, [name]: value });
  };

  const { react, angular, azure, redux } = values;
  const valid = [react, angular, azure, redux].filter(v => v).length > 2;

  function handleSubmit() {
    // Submit the changes from here
  };

  useEffect(() => {
    // returned function will be called on component unmount 
    UValidatorForm.addValidationRule('isTruthy', (value) => { return value })
  }, []);

  // return (
    <UValidatorForm
      ref={form}
      onBlur={handleSubmit}
      onError={errors => console.log(errors)}
      // debounceTime={1000}
      instantValidate={true}
    >
      <UValidatorComponent
        name="checkbox"
        label="Pick more than two"
        validators={['isTruthy']}
        errorMessages={['check more than two fields']}
        value={valid}
      >
        <FormControl className={classes.margin} required component="fieldset" >
          <FormLabel >Pick more than two</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox
                name="react"
                label="React"
                color="primary"
                checked={values.react}
                value={values.react}
                onChange={handleValue}
              />}
              label="React Facebook"
            />
            <FormControlLabel
              control={<Checkbox
                name="redux"
                label="Redux"
                color="secondary"
                checked={values.redux}
                value={values.redux}
                onChange={handleValue}
              />}
              label="Redux"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="angular"
                  label="Angular"
                  color="default"
                  checked={values.angular}
                  value={values.angular}
                  onChange={handleValue}
                />}
              label="Angular Google"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="azure"
                  label="Azure"
                  color="primary"
                  checked={values.azure}
                  value={values.azure}
                  onChange={handleValue}
                />}
              label="Azure Microsoft"
            />
          </FormGroup>
        </FormControl>
      </UValidatorComponent>
    </UValidatorForm>
//   )
// }
```