import React from 'react'
import { Box } from '@mui/material'

export interface UAriaLiveProps {
  /** Text to be announced by the screen reader */
  text?: string
  /** Used to set the priority with which screen reader should treat updates to live regions */
  type?: 'alert' | 'off' | 'polite' | 'assertive'
  /** Aria atomic */
  ariaAtomic?: boolean
  /** Aria role */
  role?: string
}

/**
 * This component is intended to generate a wrapper with the aria-live property.
 * Refer for [Aria live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions )
 */
export default function UAriaLive({
  text,
  type = 'polite',
  role = 'log',
  ariaAtomic = false,
}: UAriaLiveProps) {
  return (
    <Box
      aria-live={type}
      aria-atomic={ariaAtomic}
      aria-relevant="additions text"
      role={role}
      sx={{
        position: 'absolute',
        width: 1,
        height: 1,
        margin: -1,
        padding: 0,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: 0,
      }}
    >
      {text}
    </Box>
  )
}

