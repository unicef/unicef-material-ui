import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles(theme => ({
  noOptionsMessage: {
    padding: theme.spacing(1.5),
  },
}))

export default function NoOptionsMessage({ innerProps, selectProps }) {
  const classes = useStyles()
  return (
    <Typography
      color="textSecondary"
      {...innerProps}
      className={classes.noOptionsMessage}
    >
      {selectProps && selectProps.noOptionsText}
    </Typography>
  )
}

NoOptionsMessage.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props to be passed on to the wrapper.
   */
  innerProps: PropTypes.object,
}
