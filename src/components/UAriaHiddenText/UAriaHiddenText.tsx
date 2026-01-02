import React from 'react'
import { Box } from '@mui/material'

export interface UAriaHiddenTextProps {
  /** HTML Id of the wrapper element */
  id?: string
  /** Text to be announced by the screen reader */
  text?: string
}

/**
 * This component is designed to inform the screen reader about hidden text, often linked with aria-describedby.
 **/
export default function UAriaHiddenText({ id, text }: UAriaHiddenTextProps) {
  return (
    <Box id={id} sx={{ display: 'none' }}>
      {text}
    </Box>
  )
}

