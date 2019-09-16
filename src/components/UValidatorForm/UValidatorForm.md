```jsx
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, MenuItem } from '@material-ui/core';
import UTextField from '../UTextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  menu: {
    minWidth: 191,
  },
}));

const currencies = [
  {
    value: '',
    label: '',
  },
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

// export default function FormValidator() {

  const form = useRef('form');

  const classes = useStyles();

  const [values, setValues] = useState(
    {
      email: '',
      password: '',
      currecy: '',
    }
  );

  function handleValue(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({ ...values, [name]: value })
  };

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
      onSubmit={handleSubmit}
      onError={errors => console.log(errors)}
      debounceTime={1000}
    // instantValidate={true}
    >
      <Box display="flex" alignItems="baseline">
        <UTextField
          label="Email"
          onChange={handleValue}
          name="email"
          variant="outlined"
          className={classes.textField}
          value={values.email}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
        />
        <UTextField
          label="Password"
          onChange={handleValue}
          name="password"
          type="password"
          variant="outlined"
          className={classes.textField}
          validators={['required']}
          value={values.password}
          errorMessages={['this field is required']}
        />
        <UTextField
            id="outlined-select-currency"
            select
            label="Currency"
            className={classes.textField}
            value={values.currency}
            onChange={handleValue}
            name="currency"
            value={values.currency}
            validators={['required']}
            errorMessages={['this field is required']}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </UTextField>
        
        <Button className={classes.margin} color="primary" variant="contained" type="submit">Submit</Button>
      </Box>
    </UValidatorForm>
//   )
// }
```
