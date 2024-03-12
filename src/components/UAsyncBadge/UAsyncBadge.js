import React, { useEffect, useRef } from 'react'
import { CircularProgress, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import DoneIcon from '@material-ui/icons/Done'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 16,
    left: '50%',
    transform: 'translate(-50%, 0)',
    zIndex: 5000,
  },
  chip: {
    fontSize: 16,
    backgroundColor: 'white',
  },
  loading: {
    color: theme.palette.primary.main,
  },
  success: {
    color: theme.palette.success.dark,
  },
  error: {
    color: theme.palette.error.main,
  },
}))
/**
 * UAsyncBadge is a component to display async operation status perform in the application
 */
export default function UAsyncBadge({
  variant,
  text,
  visible,
  ariaRole,
  ariaLive,
  onReset,
}) {
  const classes = useStyles()
  const chipRef = useRef()

  /**  If variant is success or error, after few seconds, it will set asyncResponse visible to false */
  useEffect(() => {
    if (variant && variant !== 'loading') {
      const timeout = variant === 'error' ? 12000 : 8000
      const timer = setTimeout(() => {
        onReset && onReset()
      }, timeout)
      return () => clearTimeout(timer)
    }
  }, [variant])

  return (
    <span className={classes.root}>
      {visible && (
        <Chip
          ref={chipRef}
          role={ariaRole}
          aria-live={ariaLive}
          className={`${classes.chip} ${classes[variant]}`}
          avatar={
            variant === 'loading' ? (
              <CircularProgress size={16} />
            ) : variant === 'error' ? (
              <HighlightOffIcon size={16} />
            ) : (
              variant === 'success' && <DoneIcon size={16} />
            )
          }
          classes={{ avatar: classes[variant] }}
          size="medium"
          label={text}
        />
      )}
    </span>
  )
}

UAsyncBadge.propTypes = {
  /** variant of badge status  */
  variant: PropTypes.oneOf(['loading', 'error', 'success']),
  /** text to display in the badge */
  text: PropTypes.string,
  /** display status of the badge */
  visible: PropTypes.bool,
  /** trigger reset of the badge */
  onReset: PropTypes.func,
  /** Aria role of the badge */
  ariaRole: PropTypes.oneOf(['log', 'status', 'alert']),
  /** Aria live of the badge */
  ariaLive: PropTypes.oneOf(['polite', 'assertive', 'off']),
}

UAsyncBadge.defaultProps = {
  ariaRole: 'alert',
  ariaLive: 'assertive',
}
