import React from 'react'
import { Box, Drawer, DrawerProps } from '@mui/material'

export interface USideBarProps extends Omit<DrawerProps, 'variant' | 'children'> {
  /** Height of the header including MainMenu */
  headerHeight?: number
  /**
   * width of the Drawer in USideBar
   */
  width?: number
  children?: React.ReactNode
}

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
}: USideBarProps) {
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

