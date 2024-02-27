import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  errorMessage: {
    padding: theme.spacing(1),
    color: theme.palette.error.main,
  },
}))

export default function Menu({ children, selectProps, innerProps, isLoading }) {
  const classes = useStyles()
  const { errorOptionsMessage, loadingText } = selectProps
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {isLoading ? (
        <Box p={2}>
          <Typography>{loadingText}</Typography>
        </Box>
      ) : errorOptionsMessage ? (
        <Typography color="textSecondary" className={classes.errorMessage}>
          {errorOptionsMessage}
        </Typography>
      ) : (
        children
      )}
    </Paper>
  )
}

Menu.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.element.isRequired,
  /**
   * Props to be passed to the menu wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
  /**
   *  Loading for menu and picker
   */
  isLoading: PropTypes.bool,
}
