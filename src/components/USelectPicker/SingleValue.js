import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { Avatar, Typography } from '@mui/material'

const PREFIX = 'SingleValue'

const classes = {
  singleValue: `${PREFIX}-singleValue`,
  singleValueAvatar: `${PREFIX}-singleValueAvatar`,
  avatar: `${PREFIX}-avatar`,
  optionLabel: `${PREFIX}-optionLabel`,
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  [`&.${classes.singleValue}`]: {
    display: 'inline-flex',
    fontSize: 16,
    alignItems: 'center',
    width: '96%',
  },

  [`& .${classes.singleValueAvatar}`]: {
    display: 'inline-flex',
    marginRight: theme.spacing(1),
    '& .MuiAvatar-root': {
      height: 32,
      width: 32,
    },
  },

  [`& .${classes.avatar}`]: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },

  [`& .${classes.optionLabel}`]: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100% - 32px)',
  },
}))

export default function SingleValue(props) {
  const hideAvatar =
    props.selectProps &&
    props.selectProps.TextFieldProps &&
    props.selectProps.TextFieldProps.hideAvatar

  return (
    <StyledTypography
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
    </StyledTypography>
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
