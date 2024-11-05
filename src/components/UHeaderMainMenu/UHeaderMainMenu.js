import React from 'react'
import { Tabs, Box } from '@mui/material'
import PropTypes from 'prop-types'

/** Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. */
export default function UHeaderMainMenu(props) {
  const { bgcolor = 'white', ...others } = props

  UHeaderMainMenu.propTypes = {
    /** Background color of the  UHeader Main Menu*/
    bgcolor: PropTypes.string,
  }

  return (
    <Box bgcolor={bgcolor}>
      <Tabs {...others}>{props.children}</Tabs>
    </Box>
  )
}
