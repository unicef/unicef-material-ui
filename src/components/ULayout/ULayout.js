import React from 'react'
import { styled } from '@mui/material/styles'
const PREFIX = 'ULayout'

const classes = {
  root: `${PREFIX}-root`,
}

const StyledDiv = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
  },
}))

/**
 * ULayout is the Structured layout of the page, so that it contains side bar on the left and main content to the right.
 *
 * ULayout has two children components:
 * * UContent
 * * USideBar
 */

export default function ULayout(props) {
  return <StyledDiv className={classes.root}>{props.children}</StyledDiv>
}
