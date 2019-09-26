import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItemText, ListItem, Divider, ListItemIcon, Link } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/Inbox'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}))

export default function SideBarContent() {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Layout', 'Forms', 'Cards'].map((text, index) => (
          <ListItem button key={text} href={text.toLowerCase()} component={Link}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
