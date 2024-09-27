import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

const StyledDiv = styled('div')(() => ({
  display: 'none',
}))

/**
 * This component is designed to inform the screen reader about hidden text, often linked with aria-describedby.
 **/
export default function UAriaHiddenText({ id, text }) {
  return <StyledDiv id={id}>{text}</StyledDiv>
}

UAriaHiddenText.propTypes = {
  /** HTML Id of the wrapper element */
  id: PropTypes.string,
  /** Text to be announced by the screen reader */
  text: PropTypes.string,
}
