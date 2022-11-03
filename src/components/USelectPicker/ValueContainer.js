import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
const PREFIX = 'ValueContainer'

const classes = {
  rootReadOnly: `${PREFIX}-rootReadOnly`,
  lineByLineOption: `${PREFIX}-lineByLineOption`,
}

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.rootReadOnly}`]: {},

  [`&.${classes.lineByLineOption}`]: {
    flexDirection: 'column!important',
    alignItems: 'flex-start!important',
  },
}))

export default function ValueContainer({ isMulti, selectProps, children }) {
  const lineByLineOption =
    selectProps &&
    selectProps.TextFieldProps &&
    selectProps.TextFieldProps.lineByLineOption

  const readOnly =
    selectProps &&
    selectProps.TextFieldProps &&
    selectProps.TextFieldProps.readOnly

  return (
    <Root
      className={`${
        lineByLineOption && isMulti ? classes.lineByLineOption : ''
      } ${readOnly ? classes.rootReadOnly : ''} ${
        selectProps.classes.valueContainer
      }`}
    >
      {children}
    </Root>
  )
}

ValueContainer.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
}
