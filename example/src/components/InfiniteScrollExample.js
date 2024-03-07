import React from 'react'
import { UInfiniteScroll } from 'unicef-material-ui'
import { Typography, Grid } from '@mui/material'
//import { BrowserRouter as Router } from 'react-router-dom'

export default function InfiniteScrollExample() {
  const handleEndScroll = () => {
    //action for end of scroll
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '32px 0px' }}>
          Infinte scroll
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <UInfiniteScroll offset={150} onEndOfScroll={handleEndScroll} />
      </Grid>
    </Grid>
  )
}
