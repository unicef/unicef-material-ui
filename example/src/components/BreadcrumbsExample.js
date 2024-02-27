import React from 'react'
import { UBreadcrumbs } from 'unicef-material-ui'
import { Typography, Grid } from '@mui/material'
//import { BrowserRouter as Router } from 'react-router-dom'

export default function BreadCrumbsExample() {
  const links = [
    {
      text: 'New HAC Appeal',
      to: '/newappeal',
    },
  ]

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '32px 0px' }}>
          Breadcrumbs
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <UBreadcrumbs breadcrumbLinks={links} />
      </Grid>
    </Grid>
  )
}
