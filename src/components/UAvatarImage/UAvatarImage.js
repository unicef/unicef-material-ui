import { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Avatar, Tooltip, Typography } from'@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  mini: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: 5,
  },
  view: {
    border: '2px solid red',
    marginLeft: '-8px',
  },
  edit: {
    border: '2px solid green',
    marginLeft: '-8px',
  },
  none: {
    border: '2px solid #fafafa',
    marginLeft: '-8px',
  },
  font: {
    fontSize: '2rem',
  },
}))
/**
 * UAvatarImage is a compoenent to display user image from source.
 * If no image url from source app first letter of the user email will be displayed
 */
export default function UAvatarImage({
  userEmail,
  size,
  mode,
  tooltipText,
  count,
  zIndexValue,
  loadPhoto,
}) {
  const classes = useStyles()
  const [photoUrl, setPhotoUrl] = useState('')

  useEffect(() => {
    if (userEmail) {
      loadPhoto().then(imageUrl => {
        setPhotoUrl(imageUrl)
      })
    }
  }, [userEmail])

  return (
    <Fragment>
      <Tooltip title={tooltipText} placement="bottom">
        <Avatar
          className={`${classes[mode]} ${classes[size]}`}
          style={{ zIndex: zIndexValue }}
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
      </Tooltip>
    </Fragment>
  );
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

UAvatarImage.defaultProps = {
  userEmail: '',
  size: 'default', // image displays default size
  mode: '',
  tooltipText: '',
  count: 0,
  zIndexValue: 0,
}
