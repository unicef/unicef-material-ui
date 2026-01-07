import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

/**
 * This component is designed to inform the screen reader about hidden text, often linked with aria-describedby.
 **/
export default function UAriaHiddenText({ id, text }) {
  return (
    <Box id={id} sx={{ display: 'none' }}>
      {text}
    </Box>
  )
}

UAriaHiddenText.propTypes = {
  /** HTML Id of the wrapper element */
  id: PropTypes.string,
  /** Text to be announced by the screen reader */
  text: PropTypes.string,
}
