Avatar image usage:
```jsx static
import React from 'react'
import { Typography, Grid } from '@mui/material'

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
    <Grid size={12}>
      <Typography variant="h5" sx={{ margin: '32px 0px' }}>
          Avatar image
      </Typography>
    </Grid>
    <Grid size={{xs:12,sm:4,md:3}}>
      <Typography variant="subtitle1">Photo default size</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          loadPhoto={loadPhoto(`rnarayanan@unicef.org`)}
        />
    </Grid>
  </Grid>
```
### Examples

```jsx
import React from 'react'
import { Typography, Grid } from '@mui/material'

  const loadPhoto = value => async () => {
    try {
      //call api to get the image blob url
      await sleep(2000)
      return value
    } catch(err) {
      console.log(err)
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
    <Grid container>
      <Grid size={12}>
        <Typography variant="h5" sx={{ margin: '32px 0px' }}>
          Avatar image
        </Typography>
      </Grid>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Typography variant="subtitle1">Photo default size</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`
          )}
        />
      </Grid>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Typography variant="subtitle1">Photo small size</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          size="small"
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/arctichare.png`
          )}
        />
      </Grid>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Typography variant="subtitle1">Photo mini size</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          size="mini"
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/baboon.png`
          )}
        />
      </Grid>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Typography variant="subtitle1">Photo large size</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          size="large"
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/fruits.png`
          )}
        />
      </Grid>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Typography variant="subtitle1">Photo view mode</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          mode="view"
          loadPhoto={loadPhoto(`rnarayanan@unicef.org`)}
        />
      </Grid>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Typography variant="subtitle1">Photo edit mode</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          mode="edit"
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/fruits.png`
          )}
        />
      </Grid>
      <Grid size={{xs:12,sm:4,md:3}}>
        <Typography variant="subtitle1">Mode none</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          mode="none"
          loadPhoto={loadPhoto(`rnarayanan@unicef.org`)}
        />
      </Grid>
    </Grid>
```