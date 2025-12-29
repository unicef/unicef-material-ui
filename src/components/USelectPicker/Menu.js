import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { components } from 'react-select'

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

export default function Menu({ isLoading, ...others }) {
  const { errorOptionsMessage, loadingText } = others.selectProps
  return (
    <components.Menu {...others}>
      <StyledPaper square className={others.selectProps.classes.paper}>
        {isLoading ? (
          <Box p={2}>
            <Typography>{loadingText}</Typography>
          </Box>
        ) : errorOptionsMessage ? (
          <Typography color="textSecondary" className={classes.errorMessage}>
            {errorOptionsMessage}
          </Typography>
        ) : (
          others.children
        )}
      </StyledPaper>
    </components.Menu>
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
