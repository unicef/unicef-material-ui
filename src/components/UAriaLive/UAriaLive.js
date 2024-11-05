import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(() => ({
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: 0,
}))

/**
 * This component is intended to generate a wrapper with the aria-live property.
 * Refer for [Aria live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions )
 */
export default function UAriaLive({
  text,
  type = 'polite',
  role = 'log',
  ariaAtomic = false,
}) {
  return (
    <StyledBox
      aria-live={type}
      aria-atomic={ariaAtomic}
      aria-relevant="additions text"
      role={role}
    >
      {text}
    </StyledBox>
  )
}

UAriaLive.propTypes = {
  /** Text to be announced by the screen reader */
  text: PropTypes.string,
  /** Used to set the priority with which screen reader should treat updates to live regions */
  type: PropTypes.oneOf(['alert', 'off', 'polite', 'assertive']),
  /** Aria atomic */
  ariaAtomic: PropTypes.bool,
  /** Aria role */
  role: PropTypes.string,
}
