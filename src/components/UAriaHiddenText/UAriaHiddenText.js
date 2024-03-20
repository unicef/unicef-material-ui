import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(() => ({
  display: 'none',
}))

export default function AriaHiddenText({ id, text }) {
  return <StyledBox id={id}>{text}</StyledBox>
}

AriaHiddenText.propTypes = {
  /** HTML Id of the wrapper element */
  id: PropTypes.string,
  /** Text to be announced by the screen reader */
  text: PropTypes.string,
}
