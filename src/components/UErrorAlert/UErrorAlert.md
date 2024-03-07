Error alert usage:
```jsx static
import React, { useState } from 'react'
import { Typography, Grid } from '@mui/material'
import UButton from '../UButton'
  const [error, setError] = useState(null)
  function handleClose() {
    setError(null)
  }

  const handleOpenErrorAlert = () => {
    setError({ message: 'Error occured' })
  }

  <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <UErrorAlert error={error} onClose={handleClose} />
      </Grid>
    </Grid>
```
### Examples 

```jsx
import React, { useState } from 'react'
import { Typography, Grid } from '@mui/material'
import UButton from '../UButton'
  const [error, setError] = useState(null)
  function handleClose() {
    setError(null)
  }

  const handleOpenErrorAlert = () => {
    setError({ message: 'Error occured' })
  }

  <Grid container>
     <Grid item xs={12} sm={4} md={3}>
        <UButton variant="uPrimary" onClick={handleOpenErrorAlert}>
          Open Error alert
        </UButton>
        <UErrorAlert error={error} onClose={handleClose} />
      </Grid>
    </Grid>
```