import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
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

export interface UAvatarImageProps {
  /** mail is to get the image from graph */
  userEmail?: string
  /** size of the image to display in avatar */
  size?: 'default' | 'small' | 'mini' | 'large'
  /** mode of avatar inside the app */
  mode?: '' | 'view' | 'edit' | 'none'
  /** tool tip text which is used in document lock avatars */
  tooltipText?: string
  /** count display in avatar */
  count?: number
  /** to overlap with other avatar images */
  zIndexValue?: number
  /** get photo url from the respective application */
  loadPhoto?: () => Promise<string>
}

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
}: UAvatarImageProps) {
  const [photoUrl, setPhotoUrl] = useState('')

  useEffect(() => {
    if (userEmail && loadPhoto) {
      loadPhoto().then(imageUrl => {
        setPhotoUrl(imageUrl)
      })
    }
  }, [userEmail, loadPhoto])

  return (
    <React.Fragment>
      <Tooltip title={tooltipText} placement="bottom">
        <StyledBox>
          <Avatar
            className={`${mode ? classes[mode] : ''} ${size ? classes[size] : ''}`}
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

