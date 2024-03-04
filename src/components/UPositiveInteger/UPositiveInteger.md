```jsx
import React, { useState, useEffect, useRef } from 'react'
import { Grid } from '@material-ui/core'
import { UValidatorForm, UButton } from '../../index.js' // change it to '@unicef/material-ui'


// export default function UPositiveIntegerExample() {

const form = useRef('form')
const [value, setValue] = useState()

function handleValue(event) {
  const { value } = event.target
  setValue(value)
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
    <Grid item xs={12} lg={4}>
      <UPositiveInteger
        label="Number"
        value={value}
        onChange={handleValue}
        name="number"
        validators={['required']}
      />
    </Grid>
    <Grid item xs={12}>
      <UButton type="submit">Submit</UButton>
    </Grid>
  </Grid>
</UValidatorForm>
//   )
// }
```
