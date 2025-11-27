import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

const PREFIX = 'UContent'

const classes = {
  content: `${PREFIX}-content`,
}

const Root = styled('main')(({ theme }) => ({
  [`&.${classes.content}`]: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}))

/**
 * * UContent is to display the  main content of page.
 * * Children under Ucontent will be display in the main content.
 * * UContent must be wrapped inside the ULayout.
 */
export default function UContent({ headerHeight = 64, children }) {
  return (
    <Root className={classes.content}>
      <Box sx={{ minHeight: headerHeight }} />
      {children}
    </Root>
  )
}

UContent.propTypes = {
  /** Height of the header including MainMenu */
  headerHeight: PropTypes.number,
}
