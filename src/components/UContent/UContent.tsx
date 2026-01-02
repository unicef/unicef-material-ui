import React from 'react'
import { Box } from '@mui/material'

export interface UContentProps {
  /** Height of the header including MainMenu */
  headerHeight?: number
  children?: React.ReactNode
}

/**
 * * UContent is to display the  main content of page.
 * * Children under Ucontent will be display in the main content.
 * * UContent must be wrapped inside the ULayout.
 */
export default function UContent({ headerHeight = 64, children }: UContentProps) {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Box sx={{ minHeight: headerHeight }} />
      {children}
    </Box>
  )
}

