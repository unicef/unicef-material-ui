import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"
import { List, ListItemText, ListItem, Divider, ListItemIcon } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/Inbox'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}))

export default function SideBarContent() {

  // console.log(window.location)
  const path = window.location.pathname
  const classes = useStyles()
  const [selectedNode, setSelectedNode] = React.useState(path)

  function handleSelected(e, url) {
    setSelectedNode(url)
  }

  function regexUrl(text) {
    return `/${text.replace(/\s+/g, '').toLowerCase()}`
  }

  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Layout', 'Forms', 'Interactive views'].map((text, index) => (
          <ListItem
            button key={text}
            selected={selectedNode === regexUrl(text)}
            component={Link} to={regexUrl(text)}
            onClick={(e) => handleSelected(e, regexUrl(text))}
          >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
