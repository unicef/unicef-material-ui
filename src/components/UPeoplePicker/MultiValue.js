import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import clsx from 'clsx'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import CancelIcon from '@material-ui/icons/Cancel'
import { emphasize, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  chip: {
    marginLeft: theme.spacing(0.5),
    marginTop: theme.spacing(0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
}))

export default function MultiValue({
  data,
  children,
  removeProps,
  onClick,
  ...props
}) {
  const classes = useStyles()

  /** Styling the component with custom styles */
  const StyledAvatar = styled(Avatar)`
&& {
  height: 24px
  width: 24px
}`

  return (
    <Chip
      variant="outlined"
      avatar={data.avatar ? data.avatar : <StyledAvatar />}
      label={children}
      className={clsx(classes.chip, {
        [classes.chipFocused]: props.isFocused,
      })}
      onClick={() => onClick({ data, children, removeProps })}
      onDelete={removeProps.onClick}
      deleteIcon={<CancelIcon {...removeProps} />}
    />
  )
}

MultiValue.propTypes = {
  /** Children to display */
  children: PropTypes.node,
  /** To check wether it is focused */
  isFocused: PropTypes.bool,
  /** To remove the chip */
  removeProps: PropTypes.shape({
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onTouchEnd: PropTypes.func,
  }),
  /** Handle on chip click  */
  onClick: PropTypes.func,
}
