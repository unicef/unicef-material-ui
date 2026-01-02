import React from 'react'
import { Tabs, Box, TabsProps } from '@mui/material'

export interface UHeaderMainMenuProps extends Omit<TabsProps, 'children'> {
  /** Background color of the  UHeader Main Menu*/
  bgcolor?: string
  children?: React.ReactNode
}

/** Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. */
export default function UHeaderMainMenu({ bgcolor = 'white', children, ...others }: UHeaderMainMenuProps) {
  return (
    <Box bgcolor={bgcolor}>
      <Tabs {...others}>{children}</Tabs>
    </Box>
  )
}

