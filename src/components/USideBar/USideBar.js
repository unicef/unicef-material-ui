import React from 'react'
import { Box, Drawer } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * USideBar is the custom material ui component to display the content in the side bar.
 *
 * Children components inside USideBar will be displayed on the side bar.
 *
 * USideBar is located on the left side of the screen, below the header.
 *
 * USideBar must be wrapped inside the ULayout(Parent Component).
 */
export default function USideBar({
  headerHeight = 64,
  width = 300,
  children,
  ...others
}) {
  return (
    <Drawer
      variant="permanent"
      sx={{ display: { xs: 'none', md: 'block' }, width, flexShrink: 0 }}
      slotProps={{
        paper: {
          sx: { zIndex: 999, width },
        },
      }}
      {...others}
    >
      <Box sx={{ minHeight: headerHeight }} />
      {children}
    </Drawer>
  )
}

USideBar.propTypes = {
  /** Height of the header including MainMenu */
  headerHeight: PropTypes.number,
  /**
   * width of the Drawer in USideBar
   */
  width: PropTypes.number,
}
