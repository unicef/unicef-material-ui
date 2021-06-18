import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import { emphasize, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  chip: {
    marginLeft: theme.spacing(0.5),
    marginTop: theme.spacing(0.25),
    maxWidth: '90%',
    '& .Uni-MuiChip-deleteIcon': {
      display: 'flex',
    },
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  avatar: {
    width: 24,
    height: 24,
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

  return (
    <Chip
      variant="outlined"
      avatar={data.avatar ? data.avatar : <Avatar className={classes.avatar} />}
      label={children}
      className={clsx(classes.chip, {
        [classes.chipFocused]: props.isFocused,
      })}
      onDelete={removeProps.onClick}
      deleteIcon={<props.components.Remove {...removeProps} />}
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
}
