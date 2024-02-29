```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Box, Checkbox, MenuItem, Radio, FormGroup, FormControl, FormLabel, FormControlLabel, RadioGroup, Grid } from'@mui/material'
import { UValidatorForm, UValidatorComponent } from '../../index.js'  // change it to '@unicef/material-ui'

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 195,
  },
  margin: {
    marginTop: theme.spacing(1),
  },
}))

const currencies = [
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

// export default function ActiveForm() {

  const classes = useStyles()

  const form = useRef('form')
  const [value, setValue] = useState('EUR')

  function handleValue(event) {
    setValue(event.target.value)
  }

  function handleSubmit() {
    // Submit the changes from here
  }

  // return (
    <UValidatorForm
      ref={form}
      onSubmit={handleSubmit}
      onError={errors => console.log(errors)}
      debounceTime={1000}
    // instantValidate={true}
    >
      <Grid container >
        <Grid item xs={12} lg={4}>
          <ActiveFormSelect
            id="outlined-select-currency"
            select
            label="Currency"
            value={value}
            onChange={handleValue}
            className={classes.textField}
            name="currency"
            validators={['required']}
            customErrorMessages={{required: 'required field'}}
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </ActiveFormSelect>
        </Grid>
        <Grid item xs={12} lg={1}>
          <Button className={classes.margin} color="primary" variant="contained" type="submit">Submit</Button>
        </Grid>
      </Grid>
    </UValidatorForm>
//   )
// }

```