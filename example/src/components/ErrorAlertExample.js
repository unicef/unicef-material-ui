import { useState } from 'react';
import { UErrorAlert, UButton } from 'unicef-material-ui'
import { Typography, Grid } from '@mui/material'

export default function DeleteButtonExample() {
  const [error, setError] = useState(null)
  function handleClose() {
    setError(null)
  }

  const handleOpenErrorAlert = () => {
    setError({ message: 'Error occured' })
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '32px 0px' }}>
          Error alert
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <UButton variant="uPrimary" onClick={handleOpenErrorAlert}>
          Open Error alert
        </UButton>
        <UErrorAlert error={error} onClose={handleClose} />
      </Grid>
    </Grid>
  )
}
