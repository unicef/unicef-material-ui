```jsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import UTextField from '../UTextField';
const PREFIX = 'UValidatorForm'
const classes = {
  textField: `${PREFIX}-textField`,
  formControl: `${PREFIX}-formControl`,
  dense: `${PREFIX}-dense`,
  margin: `${PREFIX}-margin`,
  menu: `${PREFIX}-menu`,
  font: `${PREFIX}-font`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.textField}`]: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
   [`& .${classes.formControl}`]: {
    margin: theme.spacing(3),
  },
   [`& .${classes.dense}`]: {
    marginTop: theme.spacing(2),
  },
   [`& .${classes.margin}`]: {
    marginLeft: theme.spacing(1),
  },
   [`& .${classes.menu}`]: {
    minWidth: 191,
  },
}))

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

  const [values, setValues] = useState(
    {
      email: '',
      password: '',
      currency: '',
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
      <StyledDiv>
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
            options={currencies}
            slotProps={
              select: {
                MenuProps: {
                  className: classes.menu,
                },
              }
            }
            margin="normal"
            variant="outlined"
        />
        <Button className={classes.margin} color="primary" variant="contained" type="submit">Submit</Button>
      </StyledDiv>
    </UValidatorForm>
//   )
// }
```
