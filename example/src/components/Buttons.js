import React from 'react'
import { UButton } from 'unicef-material-ui'
import { Typography, Grid } from '@mui/material'

export default function Buttons() {
  const [loading, setLoading] = React.useState(false)
  const timer = React.useRef()

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  function handleButton() {
    setLoading(true)
    timer.current = setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '32px 0px' }}>
          UButton
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Primary button</Typography>
        <UButton variant="uPrimary">Primary</UButton>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Default button</Typography>
        <UButton variant="uDefault">Default</UButton>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Spinning button</Typography>
        <UButton
          variant="uPrimary"
          spinButton
          loading={loading}
          disabled={loading}
          onClick={handleButton}
        >
          Spin Button
        </UButton>
      </Grid>
    </Grid>
  )
}
