import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Typography,
  Box,
  Divider,
} from '@material-ui/core'

import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/Inbox'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  margin: {
    margin: theme.spacing(2),
  },
}))

export default function SideBarContent(props) {
  const { selectedNode, handleClick, toggleDrawer } = props
  const classes = useStyles()

  // Remove spaces and make all letters lower-case
  function lowerCaseUrl(str) {
    return `${str.replace(/\s+/g, '-').toLowerCase()}`
  }

  function handleLinkClick(e, str) {
    toggleDrawer && toggleDrawer(e, false)
    handleClick && handleClick(str)
  }

  return (
    <div className={classes.list} role="presentation">
      <Typography className={classes.margin} variant="h6">
        UNICEF Material UI
      </Typography>
      <Divider />
      <Box>
        <div className={classes.toolbar} />
        <List>
          {['Layout', 'Forms', 'Interactive views', 'Pickers'].map(
            (text, index) => (
              <ListItem
                button
                key={text}
                selected={selectedNode === lowerCaseUrl(text)}
                component={Link}
                to={`${lowerCaseUrl(text)}`}
                onClick={e => handleLinkClick(e, lowerCaseUrl(text))}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Box>
    </div>
  )
}
