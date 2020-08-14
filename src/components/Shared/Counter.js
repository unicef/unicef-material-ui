import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  counter: {
    marginLeft: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  counterError: {
    color: theme.palette.error.main,
  },
}))

/**
 *
 *  Counter component for the textfield
 */
export default function Counter({ value, className, maxLength }) {
  const classes = useStyles()
  const length = value ? value.length : 0
  const error = maxLength && maxLength < length
  console.log(error, value, length, maxLength)

  return (
    <div
      className={`${classes.counter} ${error &&
        classes.counterError} ${className}`}
    >
      {maxLength ? `${length}/${maxLength}` : length} characters
    </div>
  )
}

Counter.propTypes = {
  /** value */
  value: PropTypes.string,
  /** className */
  className: PropTypes.string,
  // maximum length of chars
  maxLength: PropTypes.number,
}
