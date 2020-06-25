import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function Menu({ children, selectProps, innerProps, isLoading }) {
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {isLoading ? (
        <Box p={2}>
          <Typography>Loading...</Typography>
        </Box>
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
}
