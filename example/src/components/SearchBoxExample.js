import React from 'react'
import { Typography, Grid2 as Grid } from '@mui/material'

import { USearchBox } from 'unicef-material-ui'

export default function SearchBoxExample() {
  const handleSearch = value => {
    console.log(value)
  }
  return (
    <div>
      <Typography variant="h5" style={{ margin: '32px 0px' }}>
        Search box
      </Typography>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <USearchBox onSearch={handleSearch} />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <USearchBox
            onSearch={handleSearch}
            placeholder="Type here..."
            iconLabel="Search"
          />
        </Grid>
      </Grid>
    </div>
  )
}
