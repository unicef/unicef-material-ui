import React from 'react'
import { UBreadcrumbs } from 'unicef-material-ui'
import { Typography, Grid2 as Grid } from '@mui/material'

export default function BreadCrumbsExample() {
  const links = [
    {
      text: 'New HAC Appeal',
      to: '/newappeal',
    },
  ]

  return (
    <Grid container>
      <Grid item size={12}>
        <Typography variant="h5" sx={{ margin: '32px 0px' }}>
          Breadcrumbs
        </Typography>
      </Grid>
      <Grid item size={12}>
        <UBreadcrumbs breadcrumbLinks={links} />
      </Grid>
    </Grid>
  )
}
