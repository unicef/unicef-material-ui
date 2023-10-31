```jsx
import React, { useState, useRef } from 'react'
import { Grid } from '@material-ui/core'
import { UValidatorForm, UButton, ActiveFormPositiveInteger } from '../../index.js'

// export default function ActiveFormPositiveInteger() {

const form = useRef('form')
const [value, setValue] = useState()

function handleChange(event) {
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
      <ActiveFormPositiveInteger
        label="Number"
        value={value}
        onChange={handleChange}
        name="number"
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
