import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles(theme => ({
  singleValue: {
    display: 'inline-flex',
    fontSize: 16,
    alignItems: 'center',
    width: '96%',
  },
  singleValueAvatar: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    '& .MuiAvatar-root': {
      height: 32,
      width: 32,
    },
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  optionLabel: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100% - 32px)',
  },
}))

export default function SingleValue(props) {
  const classes = useStyles()

  const hideAvatar =
    props.selectProps &&
    props.selectProps.TextFieldProps &&
    props.selectProps.TextFieldProps.hideAvatar

  return (
    <Typography
      className={classes.singleValue}
      variant="subtitle1"
      {...props.innerProps}
    >
      {hideAvatar ? (
        ''
      ) : props.data.avatar ? (
        <span className={classes.singleValueAvatar}>{props.data.avatar}</span>
      ) : (
        <Avatar className={classes.avatar} />
      )}
      <span className={classes.optionLabel}>{props.children}</span>
    </Typography>
  )
}

SingleValue.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.any,
}
