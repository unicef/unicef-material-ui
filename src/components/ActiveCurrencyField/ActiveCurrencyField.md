```jsx
import React, { useState, useRef } from 'react'
import { Grid } from '@mui/material'
import { UValidatorForm, UButton, ActiveCurrencyField } from '../../index.js'

// export default function ActiveCurrencyField() {

const form = useRef('form')
const [currencyValue, setCurrencyValue] = useState()

function handleValue(event) {
  const { value } = event.target
  setCurrencyValue(value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  // instantValidate={true}
>
  <Grid container spacing={1}>
    <Grid size={{xs:12,lg:4}}>
      <ActiveCurrencyField
        label="Currency"
        value={currencyValue}
        onChange={handleValue}
        name="currency"
      />
    </Grid>
    <Grid size={12}>
      <UButton type="submit">Submit</UButton>
    </Grid>
  </Grid>
</UValidatorForm>
//   )
// }
```
