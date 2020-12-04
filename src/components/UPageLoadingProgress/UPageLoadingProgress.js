import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  pageLoadingProgress: {
    height: '50vh',
    flex: '1',
  },
}))

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
