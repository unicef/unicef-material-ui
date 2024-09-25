import React from 'react'
import { styled } from '@mui/material/styles'
import { CircularProgress, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const PREFIX = 'UPageLoadingProgress'

const classes = {
  pageLoadingProgress: `${PREFIX}-pageLoadingProgress`,
}

const StyledDiv = styled('div')(({ theme }) => ({
  [`&.${classes.pageLoadingProgress}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    spacing: theme.spacing(8),
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
export default function UPageLoadingProgress({ text = '' }) {
  return (
    <StyledDiv className={classes.pageLoadingProgress}>
      {text ? (
        <Typography variant="h6">{text}</Typography>
      ) : (
        <CircularProgress />
      )}
    </StyledDiv>
  )
}

UPageLoadingProgress.propTypes = {
  /** text to display instead of circular progress */
  text: PropTypes.string,
}
