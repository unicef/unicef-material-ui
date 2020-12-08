import React from 'react'
import { UAvatarImage } from 'unicef-material-ui'
import { Typography, Grid } from '@material-ui/core'

export default function AvatarImageExample() {
  const loadPhoto = value => async () => {
    try {
      //call api to get the image blob url
      console.log(value)
      await sleep(2000)
      return value
    } catch {
      console.log('error')
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return (
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
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Photo small size</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          size="small"
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/arctichare.png`
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Photo mini size</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          size="mini"
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/baboon.png`
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Photo large size</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          size="large"
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/fruits.png`
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Photo view mode</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          mode="view"
          loadPhoto={loadPhoto(`rnarayanan@unicef.org`)}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Photo edit mode</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          mode="edit"
          loadPhoto={loadPhoto(
            `https://homepages.cae.wisc.edu/~ece533/images/fruits.png`
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Mode none</Typography>
        <UAvatarImage
          userEmail={`rnarayanan@unicef.org`}
          mode="none"
          loadPhoto={loadPhoto(`rnarayanan@unicef.org`)}
        />
      </Grid>
    </Grid>
  )
}
