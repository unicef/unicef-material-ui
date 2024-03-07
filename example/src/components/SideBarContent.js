import React from 'react'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Typography,
  Box,
  Divider,
} from '@mui/material'

import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/Inbox'

const PREFIX = 'SideBarContent'

const classes = {
  root: `${PREFIX}-root`,
  toolbar: `${PREFIX}-toolbar`,
  margin: `${PREFIX}-margin`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: 'flex',
  },

  [`& .${classes.toolbar}`]: theme.mixins.toolbar,

  [`& .${classes.margin}`]: {
    margin: theme.spacing(2),
  },
}))

export default function SideBarContent(props) {
  const { selectedNode, handleClick, toggleDrawer } = props

  // Remove spaces and make all letters lower-case
  function lowerCaseUrl(str) {
    return `${str.replace(/\s+/g, '-').toLowerCase()}`
  }

  function handleLinkClick(e, str) {
    toggleDrawer && toggleDrawer(e, false)
    handleClick && handleClick(str)
  }

  return (
    <Root className={classes.list} role="presentation">
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
    </Root>
  )
}
