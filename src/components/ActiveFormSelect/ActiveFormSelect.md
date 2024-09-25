```jsx
import React, { useState, useEffect, useRef } from 'react'
import { styled } from '@mui/material/styles'
import { Typography, Button, Box, Checkbox, MenuItem, Radio, FormGroup, FormControl, FormLabel, FormControlLabel, RadioGroup, Grid2 as Grid } from '@mui/material'
import { UValidatorForm, UValidatorComponent } from '../../index.js'  // change it to '@unicef/material-ui'

const PREFIX = 'ActiveForm';
const classes = {
  textField: `${PREFIX}-textField`,
  margin: `${PREFIX}-margin`,
}

const StyledDiv = styled('div')(({ theme }) => ({
    [`& .${classes.textField}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 195,
  },
  [`& .${classes.margin}`]: {
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

  const form = useRef('form')
  const [value, setValue] = useState('EUR')

  function handleValue(event) {
    setValue(event.target.value)
  }

  function handleSubmit() {
    // Submit the changes from here
  }

  // return (
    <StyledDiv>
      <UValidatorForm
        ref={form}
        onSubmit={handleSubmit}
        onError={errors => console.log(errors)}
        debounceTime={1000}
      // instantValidate={true}
      >
        <Grid container>
          <Grid item size={{ xs:12, lg:4 }}>
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
              options={currencies}
            />
          </Grid>
          <Grid item size={{ xs:12, lg:1 }}>
            <Button className={classes.margin} color="primary" variant="contained" type="submit">Submit</Button>
          </Grid>
        </Grid>
      </UValidatorForm>
    </StyledDiv>
//   )
// }

```