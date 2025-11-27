import React from 'react'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { Grid, Box, Paper, Typography } from '@mui/material'

const PREFIX = 'ColorsExample'

const classes = {
  colorTitle: `${PREFIX}-colorTitle`,
  colorCode: `${PREFIX}-colorCode`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.colorTitle}`]: {
    textTransform: 'capitalize',
  },
  [`& .${classes.colorCode}`]: {
    padding: theme.spacing(1.25),
    borderTop: '1px solid #ccc',
  },
}))

export default function ColorsExample(props) {
  const theme = useTheme()

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
    <StyledGrid container spacing={2}>
      {requiredColors.map(
        colorKey =>
          (theme.palette[colorKey] && (
            <>
              <Grid size={12}>
                <Typography className={classes.colorTitle} variant="h5">
                  {colorKey} colors
                </Typography>
              </Grid>
              {Object.keys(theme.palette[colorKey]).map(color => {
                return (
                  <Grid key={color} item size={{ xs: 6, md: 4, lg: 2 }}>
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
    </StyledGrid>
  )
}
