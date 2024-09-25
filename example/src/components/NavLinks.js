import React from 'react'
import {
  Button,
  MenuItem,
  Menu,
  ListItemText,
  IconButton,
  Avatar,
  Link,
  Box,
} from '@mui/material'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import MailIcon from '@mui/icons-material/Mail'
import avatar from '../assets/avatar.png'

export default function NavLinks() {
  const [profileOpen, setProfileOpen] = React.useState(null)
  const [profile, setProfile] = React.useState(null)

  const handleProfileMenuOpen = event => {
    setProfileOpen(event.currentTarget)
  }

  const handleProfileMenuClose = event => {
    setProfileOpen(null)
  }
  const handleProfile = event => {
    setProfile(event.currentTarget)
  }

  const handleProfileMenu = event => {
    setProfile(null)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        pl: 4,
        pr: 2,
      }}
    >
      <Button color="inherit">
        <MailIcon />
        Login
      </Button>
      <Button
        aria-label="dropdown"
        color="inherit"
        onClick={handleProfileMenuOpen}
      >
        DropDown
        <ArrowDropDown />
      </Button>
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="menu"
        anchorEl={profileOpen}
        keepMounted
        open={Boolean(profileOpen)}
        onClose={handleProfileMenuClose}
      >
        <MenuItem>
          <ListItemText primary="Sent" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Drafts" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Inbox" />
        </MenuItem>
      </Menu>
      <Button color="inherit">
        <Link
          underline="hover"
          href="https://github.com/unicef/unicef-material-ui"
          sx={{
            color: 'inherit',
          }}
        >
          Github
        </Link>
      </Button>
      <IconButton
        edge="end"
        aria-label="Account of current user"
        aria-haspopup="true"
        onClick={handleProfile}
        size="large"
      >
        <Avatar alt="User" src={avatar} />
      </IconButton>
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="menu"
        anchorEl={profile}
        keepMounted
        open={Boolean(profile)}
        onClose={handleProfileMenu}
      >
        <MenuItem>
          <ListItemText primary="Sent mail" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Drafts" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Inbox" />
        </MenuItem>
      </Menu>
    </Box>
  )
}
