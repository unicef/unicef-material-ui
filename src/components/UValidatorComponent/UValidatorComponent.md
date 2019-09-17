### Usage

```jsx static
const { react, angular, azure, redux } = values;
/**
 * Our own rule for validation
 * Value will be true only when more than one checkboxes are checked (below condition), then no errors.
 * If below condition does not meet, will dispaly error. 
 * value must be passed to UValidatorComponent. 
 */
const value = [react, angular, redux].filter(v => v).length > 1;

export default function CheckBoxValidator() {

  return (
    <UValidatorForm
      ref={form}
      onBlur={handleSubmit}
      onError={errors => console.log(errors)}
      // debounceTime={1000}
      instantValidate={true}
    >
      <UValidatorComponent
        // validators array
        validators={['isTruthy']}
        // error messages to be displayed
        errorMessages={['check more than two fields']}
        value={value}  // <---- you must provide this prop, it will be used only for validation
      > 
        <Checkbox
          name="react"
          label="React"
          color="primary"
          checked={values.react}
          value={values.react}
          onChange={handleValue}
        />
        <Checkbox
          name="redux"
          label="Redux"
          color="secondary"
          checked={values.redux}
          value={values.redux}
          onChange={handleValue}
        />
        <Checkbox
          name="angular"
          label="Angular"
          color="secondary"
          checked={values.angular}
          value={values.angular}
          onChange={handleValue}
        />
      </UValidatorComponent>
    </UValidatorForm>
  )
}
```

### Example for Check Box : 

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Checkbox, MenuItem, Radio, FormGroup, FormControl, FormLabel, FormControlLabel, RadioGroup, FormHelperText } from '@material-ui/core';
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

// export default function CheckBoxValidator() {

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

  // return (
  <UValidatorForm
    ref={form}
    onBlur={handleSubmit}
    onError={errors => console.log(errors)}
    // debounceTime={1000}
    instantValidate={true}
  >
    <UValidatorComponent
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

### Example for Choice Button

``` jsx 
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Checkbox, MenuItem, Radio, FormGroup, FormControl, FormLabel, FormControlLabel, RadioGroup, FormHelperText } from '@material-ui/core';
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

// export default function ChoiceButtonValidator() {

  const form = useRef('form');

  const classes = useStyles();

 const [value, setValue] = React.useState(null);

  function handleChange(event) {
    setValue(event.target.value);
  }

  const validChoice = value === null ? false : true;

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
      name="radio"
      label="Choose an option"
      validators={['isTruthy']}
      errorMessages={['choose an option from above']}
      value={validChoice}
    >
      <FormControl className={classes.margin} required component="fieldset" >
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" row name="gender2" value={value} onChange={handleChange}>
          <FormControlLabel
            value="windows"
            control={<Radio color="primary" />}
            label="Windows"
            labelPlacement="end"
          />
          <FormControlLabel
            value="mac"
            control={<Radio color="primary" />}
            label="Mac"
            labelPlacement="end"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Other"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
    </UValidatorComponent>
    <Button className={classes.margin} color="primary" variant="contained" type="Validate">Validate</Button>
  </UValidatorForm>
//   )
// }
```