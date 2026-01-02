import React, { useEffect, useRef } from 'react'
import { styled } from '@mui/material/styles'
import { CircularProgress, Chip } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import DoneIcon from '@mui/icons-material/Done'

const PREFIX = 'UAsyncBadge'

const classes = {
  root: `${PREFIX}-root`,
  chip: `${PREFIX}-chip`,
  loading: `${PREFIX}-loading`,
  success: `${PREFIX}-success`,
  error: `${PREFIX}-error`,
}

const Root = styled('span')(({ theme }) => ({
  [`&.${classes.root}`]: {
    position: 'fixed',
    top: 16,
    left: '50%',
    transform: 'translate(-50%, 0)',
    zIndex: 5000,
  },

  [`& .${classes.chip}`]: {
    fontSize: 16,
    backgroundColor: 'white',
  },

  [`& .${classes.loading}`]: {
    color: theme.palette.primary.main,
  },

  [`& .${classes.success}`]: {
    color: theme.palette.success.dark,
  },

  [`& .${classes.error}`]: {
    color: theme.palette.error.main,
  },
}))

export interface UAsyncBadgeProps {
  /** variant of badge status  */
  variant?: 'loading' | 'error' | 'success'
  /** text to display in the badge */
  text?: string
  /** display status of the badge */
  visible?: boolean
  /** trigger reset of the badge */
  onReset?: () => void
  /** Aria role of the badge */
  ariaRole?: 'log' | 'status' | 'alert'
  /** Aria live of the badge */
  ariaLive?: 'polite' | 'assertive' | 'off'
}

/**
 * UAsyncBadge is a component to display async operation status perform in the application
 */
export default function UAsyncBadge({
  variant,
  text,
  visible,
  ariaRole = 'alert',
  ariaLive = 'assertive',
  onReset,
}: UAsyncBadgeProps) {
  const chipRef = useRef<HTMLDivElement>(null)

  /**  If variant is success or error, after few seconds, it will set asyncResponse visible to false */
  useEffect(() => {
    if (variant && variant !== 'loading') {
      const timeout = variant === 'error' ? 12000 : 8000
      const timer = setTimeout(() => {
        onReset && onReset()
      }, timeout)
      return () => clearTimeout(timer)
    }
  }, [variant, onReset])

  return (
    <Root className={classes.root}>
      {visible && (
        <Chip
          ref={chipRef}
          role={ariaRole}
          aria-live={ariaLive}
          className={`${classes.chip} ${variant ? classes[variant] : ''}`}
          avatar={
            variant === 'loading' ? (
              <CircularProgress size={16} />
            ) : variant === 'error' ? (
              <HighlightOffIcon fontSize="small" />
            ) : (
              variant === 'success' && <DoneIcon fontSize="small" />
            )
          }
          classes={{ avatar: variant ? classes[variant] : undefined }}
          size="medium"
          label={text}
        />
      )}
    </Root>
  )
}

