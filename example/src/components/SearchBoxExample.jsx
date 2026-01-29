import React from 'react'
import { Typography, Grid, Box } from '@mui/material'

import { USearchBox } from '@unicef/material-ui'

export default function SearchBoxExample() {
  const handleSearch = value => {
    console.log(value)
  }
  return (
    <Box>
      <Typography variant="h5" sx={{ margin: '32px 0px' }}>
        Search box
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <USearchBox onSearch={handleSearch} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <USearchBox
            onSearch={handleSearch}
            placeholder="Type here..."
            iconLabel="Search"
          />
        </Grid>
      </Grid>
    </Box>
  )
}
