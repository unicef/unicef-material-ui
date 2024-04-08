```jsx
import React, { useState, useEffect, useRef } from 'react'
import { Grid } from '@mui/material'
import { UValidatorForm, UButton } from '../../index.js' // change it to '@unicef/material-ui'
ActiveFormCoordinateField

// export default function ActiveFormCoordinateField() {

const form = useRef('form')
const [coordinate, setCoordinate] = useState({
  latitude: '',
  longitude: '',
})

function handleValue(event) {
  const { name, value } = event.target
  setCoordinate({
    ...coordinate,
    [name]: value,
  })
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
      <ActiveFormCoordinateField
        label="Latitude"
        value={coordinate.latitude}
        onChange={handleValue}
        name="latitude"
        coordinateType="latitude"
        validators={['required']}
      />
    </Grid>
    <Grid item xs={12} lg={4}>
      <ActiveFormCoordinateField
        label="Longitude"
        value={coordinate.longitude}
        onChange={handleValue}
        name="longitude"
        coordinateType="longitude"
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
