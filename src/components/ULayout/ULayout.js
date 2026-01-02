import React from 'react'
import { Box } from '@mui/material'

/**
 * ULayout is the Structured layout of the page, so that it contains side bar on the left and main content to the right.
 *
 * ULayout has two children components:
 * * UContent
 * * USideBar
 */

export default function ULayout({ children }) {
  return <Box sx={{ display: 'flex' }}>{children}</Box>
}
