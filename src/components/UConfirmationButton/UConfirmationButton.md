Delete button with examples:

```jsx
import React, { useState } from 'react'
import { Typography, Grid, Menu, MenuItem, Link, IconButton } from '@material-ui/core'
import LinkOffIcon from '@material-ui/icons/LinkOff'
import MoreVertIcon from '@material-ui/icons/MoreVert'

  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  const itemId = 1
  function handleDelete(event, id) {
    console.log(id)
  }
  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }
  function handleClose() {
    setAnchorEl(null)
  }

    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Icon variant</Typography>
        <UConfirmationButton
          onConfirm={handleDelete}
          id={itemId}
          buttonText="Delete"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Menu item variant</Typography>
        <IconButton
          aria-label="more"
          aria-controls="menu-item-variant"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="menu-item-variant"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          disableEnforceFocus={true}
        >
          <MenuItem onClick={handleClose}>
            <Link href="#" underline="none">
              Edit
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="#" underline="none">
              View
            </Link>
          </MenuItem>
          <UConfirmationButton
            onConfirm={handleDelete}
            id={itemId}
            buttonText="Delete"
            variant="menuItem"
            icon={null}
          />
        </Menu>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Button variant</Typography>
        <UConfirmationButton
          onConfirm={handleDelete}
          id={itemId}
          buttonText="Delete"
          variant="button"
          icon={null}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Custom icon and confirm text</Typography>
        <UConfirmationButton
          onConfirm={handleDelete}
          id={itemId}
          buttonText="Unlink"
          variant="button"
          confirmText='Confirm unlink?'
          confirmActionText='Yes, unlink'
          icon={<LinkOffIcon />}
        />
      </Grid>
    </Grid>
  
````
  
    

