Searchbox usage:

```jsx static
import React from 'react'
import { Grid } from '@mui/material'
import USearchbox from './USearchBox'

const handleSearch = value => {
  console.log('Search value:', value)
  //Service call or other actions
}

;<Grid container>
  <Grid item xs={12} sm={4} md={3}>
    <USearchbox onSearch={handleSearch} />
  </Grid>
</Grid>
```

### Examples

```jsx
import React from 'react'
import { Grid } from '@mui/material'
import USearchbox from './USearchBox'
const handleSearch = value => {
  console.log('Search value:', value)
  //Service call or other actions
}
;<Grid container>
  <Grid item xs={12} sm={6}>
    <USearchbox onSearch={handleSearch} />
  </Grid>
</Grid>
```
