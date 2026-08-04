import React from 'react'
import { Tabs, Box } from '@mui/material'
import PropTypes from 'prop-types'

/** Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. */
export default function UHeaderMainMenu(props) {
  const { bgcolor = 'white', children, ...others } = props

  return (
    <Box
      sx={{
        bgcolor: bgcolor,
      }}
    >
      <Tabs {...others}>{children}</Tabs>
    </Box>
  )
}

UHeaderMainMenu.propTypes = {
  /** Background color of the  UHeader Main Menu*/
  bgcolor: PropTypes.string,
  /** The content of the component.*/
  children: PropTypes.node,
}
