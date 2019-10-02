import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"
import { List, ListItemText, ListItem, ListItemIcon } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/Inbox'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}))

export default function SideBarContent(props) {

  const { selectedNode, handleClick } = props
  const classes = useStyles()

  // Remove spaces and make all letters lower-case
  function lowerCaseUrl(str) {
    return `${str.replace(/\s+/g, '-').toLowerCase()}`
  }

  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Layout', 'Forms', 'Interactive views'].map((text, index) => (
          <ListItem
            button key={text}
            selected={selectedNode === lowerCaseUrl(text)}
            component={Link} to={`${lowerCaseUrl(text)}`}
            onClick={(e) => handleClick(e, lowerCaseUrl(text))}
          >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
