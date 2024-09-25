import React from 'react'
import { UInfiniteScroll } from 'unicef-material-ui'
import { Typography, Grid2 as Grid } from '@mui/material'

export default function InfiniteScrollExample() {
  const handleEndScroll = () => {
    //action for end of scroll
  }

  return (
    <Grid container>
      <Grid item size={12}>
        <Typography variant="h5" sx={{ margin: '32px 0px' }}>
          Infinite scroll
        </Typography>
      </Grid>
      <Grid item size={12}>
        <UInfiniteScroll offset={150} onEndOfScroll={handleEndScroll} />
      </Grid>
    </Grid>
  )
}
