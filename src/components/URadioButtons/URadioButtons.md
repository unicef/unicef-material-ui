Radion button with example:

```jsx
import React, { useState } from 'react'
import { Typography, Grid } from '@mui/material'

  const [radioValue, setRadioValue] = useState('Yes')
  const isReadOnly = false
  function handleOnOptionChange(event) {
    setRadioValue(event.target.value)
  }

    <Grid container>
      <Grid size={12}>
        <Typography variant="h5" sx={{ margin: '32px 0px' }}>
          Radio buttons
        </Typography>
      </Grid>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Typography variant="subtitle1">Row variant</Typography>
        <URadioButtons
          value={radioValue}
          onChange={handleOnOptionChange}
          isReadOnly={isReadOnly}
          optionLabels={['Yes', 'No']}
          optionValues={['Yes', 'No']}
        ></URadioButtons>
      </Grid>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Typography variant="subtitle1">Column variant</Typography>
        <URadioButtons
          value={radioValue}
          onChange={handleOnOptionChange}
          isReadOnly={isReadOnly}
          optionLabels={['Yes', 'No']}
          optionValues={['Yes', 'No']}
          variant="column"
        ></URadioButtons>
      </Grid>
    </Grid>
````