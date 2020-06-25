import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  hideMenu: {
    display: 'none',
  },
  errorMessage: {
    padding: theme.spacing(1),
    color: theme.palette.error.main,
  },
}))

export default function Menu({ children, selectProps, innerProps, isLoading }) {
  const classes = useStyles()
  const { errorOptionsMessage } = selectProps

  return (
    <Paper square className={`${selectProps.classes.paper}`} {...innerProps}>
      {isLoading ? (
        <Box p={2}>
          <Typography>Loading...</Typography>
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
   *  To display error message on loading options
   */
  errorLoadingOptions: PropTypes.string,
}
