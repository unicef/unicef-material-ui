Avatar image usage:
```jsx static
import React from 'react'
import { Typography, Grid } from '@material-ui/core'

  const loadPhoto = email => async () => {
    try {
      await sleep(2000)
      return `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`
    } catch {
      console.log('error')
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  <Grid container>
    <Grid item xs={12}>
      <Typography variant="h5" style={{ margin: '32px 0px' }}>
          Avatar image
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={3}>
      <Typography variant="subtitle1">Photo default size</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          loadPhoto={loadPhoto(`rnarayanan@unicef.org`)}
        />
    </Grid>
  </Grid>
```