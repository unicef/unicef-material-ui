import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Box, Paper, Typography } from '@material-ui/core'

export default function ColorsExample() {
  const theme = useTheme()

  let requiredColors = [
    'unicef',
    'grey',
    'text',
    'primary',
    'secondary',
    'success',
    'info',
    'error',
  ]

  return (
    <Grid container spacing={2}>
      {requiredColors.map(
        colorKey =>
          (theme.palette[colorKey] && (
            <>
              <Grid item xs={12}>
                <Typography
                  style={{ textTransform: 'capitalize' }}
                  variant="h5"
                >
                  {colorKey} colors
                </Typography>
              </Grid>
              {Object.keys(theme.palette[colorKey]).map(color => {
                return (
                  <Grid key={color} item xs={6} md={4} lg={2}>
                    <Paper p={3}>
                      <Box bgcolor={theme.palette[colorKey][color]} p={4}>
                        <Typography variant="body1">{color}</Typography>
                      </Box>
                    </Paper>
                  </Grid>
                )
              })}
            </>
          )) ||
          ''
      )}
    </Grid>
  )
}
