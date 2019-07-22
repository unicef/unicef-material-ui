import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  ListItemText,
  ListItem,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paddingTabs: {
   padding: `${theme.spacing(1, 1)} !important`,
  },
}));



function MenuTabs() {

  const classes = useStyles();

  return( 
    <React.Fragment>
      <ListItem button key="Active" selected className={classes.paddingTabs}>
        <ListItemText primary="Active" />
      </ListItem>
      <ListItem button key="Disbaled" disabled className={classes.paddingTabs}>
        <ListItemText primary="Disbaled" />
      </ListItem>
      <ListItem button key="Directory" className={classes.paddingTabs}>
        <ListItemText primary="Directory" />
      </ListItem>
  </React.Fragment>
  )
}

export default MenuTabs