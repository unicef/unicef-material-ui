import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { Avatar, Tooltip, Typography, Box } from '@mui/material'
const PREFIX = 'UAvatarImage'

const classes = {
  small: `${PREFIX}-small`,
  large: `${PREFIX}-large`,
  mini: `${PREFIX}-mini`,
  view: `${PREFIX}-view`,
  edit: `${PREFIX}-edit`,
  none: `${PREFIX}-none`,
  font: `${PREFIX}-font`,
}

const StyledBox = styled('div')(({ theme }) => ({
  [`& .${classes.small}`]: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },

  [`& .${classes.large}`]: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  [`& .${classes.mini}`]: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: 5,
  },

  [`& .${classes.view}`]: {
    border: '2px solid red',
    marginLeft: '-8px',
  },

  [`& .${classes.edit}`]: {
    border: '2px solid green',
    marginLeft: '-8px',
  },

  [`& .${classes.none}`]: {
    border: `2px solid ${theme.palette.grey[50]}`,
    marginLeft: '-8px',
  },

  [`& .${classes.font}`]: {
    fontSize: '2rem',
  },
}))

/**
 * UAvatarImage is a compoenent to display user image from source.
 * If no image url from source app first letter of the user email will be displayed
 */
export default function UAvatarImage({
  userEmail = '',
  size = 'default',
  mode = '',
  tooltipText = '',
  count = 0,
  zIndexValue = 0,
  loadPhoto,
}) {
  const [photoUrl, setPhotoUrl] = useState('')

  useEffect(() => {
    if (userEmail) {
      loadPhoto().then(imageUrl => {
        setPhotoUrl(imageUrl)
      })
    }
  }, [userEmail])

  return (
    <React.Fragment>
      <Tooltip title={tooltipText} placement="bottom">
        <StyledBox>
          <Avatar
            className={`${classes[mode]} ${classes[size]}`}
            sx={{ zIndex: zIndexValue }}
            src={photoUrl}
          >
            {size === 'large' ? (
              <Typography className={classes.font}>
                {userEmail && userEmail[0].toUpperCase()}
              </Typography>
            ) : count === 0 ? (
              userEmail && userEmail[0].toUpperCase()
            ) : (
              `+${count}`
            )}
          </Avatar>
        </StyledBox>
      </Tooltip>
    </React.Fragment>
  )
}

// prop-types
UAvatarImage.propTypes = {
  /** mail is to get the image from graph */
  userEmail: PropTypes.string,
  /** size of the image to display in avatar */
  size: PropTypes.oneOf(['default', 'small', 'mini', 'large']),
  /** mode of avatar inside the app */
  mode: PropTypes.oneOf(['', 'view', 'edit', 'none']),
  /** tool tip text which is used in document lock avatars */
  tooltipText: PropTypes.string,
  /** count display in avatar */
  count: PropTypes.number,
  /** to overlap with other avatar images */
  zIndexValue: PropTypes.number,
  /** get photo url from the respective application */
  loadPhoto: PropTypes.func,
}
