import React from 'react'
import { UDeleteButton } from 'unicef-material-ui'
import { Typography, Grid } from '@material-ui/core'

export default function DeleteButtonExample() {
  const itemId = 1
  function handleDelete(event, id) {
    console.log(id)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '32px 0px' }}>
          Delete button
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Icon variant</Typography>
        <UDeleteButton
          onConfirm={handleDelete}
          id={itemId}
          tooltipText="Delete"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Menu item variant</Typography>
        <UDeleteButton
          onConfirm={handleDelete}
          id={itemId}
          tooltipText="Delete"
          variant="menuItem"
        />
      </Grid>
    </Grid>
  )
}
