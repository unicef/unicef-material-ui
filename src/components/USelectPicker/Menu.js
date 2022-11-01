import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
const PREFIX = 'Menu'

const classes = {
  errorMessage: `${PREFIX}-errorMessage`,
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  [`& .${classes.errorMessage}`]: {
    padding: theme.spacing(1),
    color: theme.palette.error.main,
  },
}))

export default function Menu({ children, selectProps, innerProps, isLoading }) {
  const { errorOptionsMessage } = selectProps

  return (
    <StyledPaper square className={selectProps.classes.paper} {...innerProps}>
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
    </StyledPaper>
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
