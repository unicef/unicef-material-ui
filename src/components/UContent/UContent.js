import React from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * * UContent is to display the  main content of page.
 * * Children under UContent will be display in the main content.
 * * UContent must be wrapped inside the ULayout.
 */
export default function UContent({ headerHeight = 64, children }) {
  return (
    <Box sx={{ flexGrow: 1, padding: 1, minWidth: 0 }}>
      <Box sx={{ minHeight: headerHeight }} />
      {children}
    </Box>
  )
}

UContent.propTypes = {
  /** Height of the header including MainMenu */
  headerHeight: PropTypes.number,
  /** Content to display inside the main content area */
  children: PropTypes.node,
}
