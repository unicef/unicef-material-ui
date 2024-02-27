import React from 'react'
import makeStyles  from '@mui/styles/makeStyles'
import { useTheme } from '@mui/material'
import { Grid, Box, Paper, Typography } from '@mui/material'

const useStyles = makeStyles(theme => ({
  colorTitle: {
    textTransform: 'capitalize',
  },
  colorCode: {
    padding: theme.spacing(1.25),
    borderTop: '1px solid #ccc',
  },
}))

export default function ColorsExample() {
  const theme = useTheme()
  const classes = useStyles()

  let requiredColors = [
    'unicef',
    'grey',
    'background',
    'common',
    'text',
    'primary',
    'secondary',
    'success',
    'info',
    'error',
    'warning',
  ]

  return (
    <Grid container spacing={2}>
      {requiredColors.map(
        colorKey =>
          (theme.palette[colorKey] && (
            <>
              <Grid item xs={12}>
                <Typography className={classes.colorTitle} variant="h5">
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
                      <Typography className={classes.colorCode} variant="body1">
                        {theme.palette[colorKey][color]}
                      </Typography>
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
