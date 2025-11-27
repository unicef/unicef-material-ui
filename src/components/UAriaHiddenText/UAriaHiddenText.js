import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledBox = styled('div')(() => ({
  display: 'none',
}))

/**
 * This component is designed to inform the screen reader about hidden text, often linked with aria-describedby.
 **/
export default function UAriaHiddenText({ id, text }) {
  return <StyledBox id={id}>{text}</StyledBox>
}

UAriaHiddenText.propTypes = {
  /** HTML Id of the wrapper element */
  id: PropTypes.string,
  /** Text to be announced by the screen reader */
  text: PropTypes.string,
}
