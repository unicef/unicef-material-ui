import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, CircularProgress, Typography } from'@mui/material'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  pageLoadingProgress: {
    height: '50vh',
    flex: '1',
  },
}))
/**
 * UPageLoadingProgress is a component to display page loading progress in the user screen
 * It has two type of page loading information which is displayed in the center of the screen
 * 1. Display circular progress
 * 2. Display text message
 */
export default function UPageLoadingProgress(props) {
  const classes = useStyles()
  const { text } = props
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={8}
      className={classes.pageLoadingProgress}
    >
      {text ? (
        <Typography variant="h6">{text}</Typography>
      ) : (
        <CircularProgress />
      )}
    </Box>
  )
}

UPageLoadingProgress.propTypes = {
  /** text to display instead of circular progress */
  text: PropTypes.string,
}

UPageLoadingProgress.defaultProps = {
  text: '',
}
