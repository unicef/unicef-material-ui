import React, { useState } from 'react'
import { UAsyncBadge } from 'unicef-material-ui'
import makeStyles  from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    top: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default function RadioButtonsExample() {
  const classes = useStyles()
  const [badgeStatus, setBadgeStatus] = useState({
    visible: true,
    text: 'Success',
    variant: 'success',
  })
  function handleResetBadge() {
    setBadgeStatus({ ...badgeStatus, visible: false })
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <UAsyncBadge
          visible={badgeStatus.visible}
          text={badgeStatus.text}
          variant={badgeStatus.variant}
          onReset={handleResetBadge}
        />
      </div>
    </div>
  )
}
