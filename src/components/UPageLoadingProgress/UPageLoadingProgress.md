Page loading usage:
 
```jsx static
import React,{ useRef, useState, useEffect } from 'react'
import { Typography, Grid } from '@mui/material'

  const [loading, setLoading] = useState(true)
  const timer = useRef()

  useEffect(() => {
    timer.current = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  loading ? <UPageLoadingProgress /> : (
   <Grid container>
      <Grid item xs={12} sm={4} md={3}>
      </Grid>
    </Grid>
    )
```
### Examples 

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { Typography, Grid } from '@mui/material'
import UButton from '../UButton'
  const [loading, setLoading] = useState(false)
  const timer = useRef()

  useEffect(() => {
    timer.current = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer.current)
    }
  }, [loading])

  const handleLoad = () => {
    setLoading(true)
  }

  loading ? <UPageLoadingProgress /> :(
   <Grid container>
     <Grid item xs={12} sm={4} md={3}>
        <UButton variant="uPrimary" onClick={handleLoad}>
          Click load Progress
        </UButton>
      </Grid>
    </Grid>
  )
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { Typography, Grid } from '@mui/material'
import UButton from '../UButton'
  const [loading, setLoading] = useState(false)
  const timer = useRef()

  useEffect(() => {
    timer.current = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer.current)
    }
  }, [loading])

  const handleLoad = () => {
    setLoading(true)
  }

  loading ? <UPageLoadingProgress text= "Loading..." /> :(
   <Grid container>
     <Grid item xs={12} sm={4} md={3}>
        <UButton variant="uPrimary" onClick={handleLoad}>
          Click load text
        </UButton>
      </Grid>
    </Grid>
  )
```