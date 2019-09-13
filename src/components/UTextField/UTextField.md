
```jsx
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, MenuItem } from '@material-ui/core';
import { SelectValidator, ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CheckboxValidatorElement from '../UCheckbox';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 195,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    minWidth: 191,
  },
}));

const debounceTime = 1000;

// export default function FormValidator() {

  const form = useRef('form');

  const classes = useStyles();

  const [values, setValues] = useState(
    {
      email: '',
      password: '',
      termAndCondition: false,
      currecy: '',
    }
  )

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
  ]

  function handleValue(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({ ...values, [name]: value })
  }

  function handleSubmit() {
    // Submit the changes from here
  }
  useEffect(() => {
    // returned function will be called on component unmount 
    ValidatorForm.addValidationRule('isTruthy', (value) => { return value })
  }, []);

  // return (
    
    <ValidatorForm
      ref={form}
      onSubmit={handleSubmit}
      // onError={errors => console.log(errors)}
      debounceTime={debounceTime}
    // instantValidate={true}
    >
      <Box display="flex" alignItems="baseline">
        <TextValidator
          label="Email"
          onChange={handleValue}
          name="email"
          variant="outlined"
          value={values.email}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
        />
        <TextValidator
          label="Password"
          onChange={handleValue}
          name="password"
          type="password"
          variant="outlined"
          style={{ margin: "16px 16px" }}
          validators={['required']}
          value={values.password}
          errorMessages={['this field is required']}
        />
        <SelectValidator
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
        </SelectValidator>
        <CheckboxValidatorElement
          name="termAndCondition"
          label="Agree with the Terms and Conditions"
          validators={['isTruthy']}
          errorMessages={['this field is required']}
          checked={values.termAndCondition}
          value={values.termAndCondition}
          onChange={handleValue}
        />
        <Button color="primary" variant="contained" type="submit">Submit</Button>
      </Box>
    </ValidatorForm>
//   )
// };
```