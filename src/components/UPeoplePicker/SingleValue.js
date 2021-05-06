import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  singleValue: {
    display: 'inline-flex',
    fontSize: 16,
    alignItems: 'center',
  },
  singleValueAvatar: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    '& .MuiAvatar-root': {
      height: 24,
      width: 24,
    },
  },
  avatar: {
    height: 24,
    width: 24,
    marginRight: theme.spacing(1),
  },
}))

export default function SingleValue(props) {
  const classes = useStyles()

  return (
    <Typography
      className={classes.singleValue}
      variant="subtitle1"
      {...props.innerProps}
    >
      {props.data.avatar ? (
        <span className={classes.singleValueAvatar}>{props.data.avatar}</span>
      ) : (
        <Avatar className={classes.avatar} />
      )}
      {props.children}
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
