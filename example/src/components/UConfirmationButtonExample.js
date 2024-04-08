import React, { useState } from 'react'
import { UConfirmationButton } from 'unicef-material-ui'
import {
  Typography,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Link,
} from '@mui/material'
import LinkOffIcon from '@mui/icons-material/LinkOff'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export default function UConfirmationButtonExample() {
  const [anchorEl, setAnchorEl] = useState({ menu: null, popup: null })
  const openMenuVariant = Boolean(anchorEl.menu)
  const openPopupVariant = Boolean(anchorEl.popup)

  function handleDelete(event, id) {
    console.log(id)
  }
  function handleClick(event, type) {
    setAnchorEl({
      ...anchorEl,
      [type]: event.currentTarget,
    })
  }
  function handleClose(type) {
    setAnchorEl({
      ...anchorEl,
      [type]: null,
    })
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '32px 0px' }}>
          Confirmation button
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Confirm popup variant</Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">Icon</Typography>
          <UConfirmationButton
            confirmText="Are you sure you want to delete the item?"
            onConfirm={handleDelete}
            id={1}
            buttonText="Delete"
            confirmVariant="popup"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">Menu item</Typography>
          <IconButton
            aria-label="more"
            aria-controls="menu-item-variant-confirm-popup"
            aria-haspopup="true"
            onClick={e => handleClick(e, 'popup')}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu-item-variant-confirm-popup"
            anchorEl={anchorEl.popup}
            keepMounted
            open={openPopupVariant}
            onClose={() => handleClose('popup')}
            disableEnforceFocus={true}
          >
            <MenuItem onClick={() => handleClose('popup')}>
              <Link href="#" underline="none">
                Edit
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleClose('popup')}>
              <Link href="#" underline="none">
                View
              </Link>
            </MenuItem>
            <UConfirmationButton
              onConfirm={handleDelete}
              id={2}
              confirmText="Are you sure you want to delete the item?"
              buttonText="Delete"
              variant="menuItem"
              icon={null}
              confirmVariant="popup"
            />
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">Button</Typography>
          <UConfirmationButton
            onConfirm={handleDelete}
            id={3}
            confirmText="Are you sure you want to delete the item?"
            buttonText="Delete"
            variant="button"
            confirmVariant="popup"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">Custom icon</Typography>
          <UConfirmationButton
            onConfirm={handleDelete}
            id={4}
            buttonText="Unlink"
            variant="button"
            confirmText="Are you sure you want to unlink the item?"
            confirmActionText="Yes, unlink"
            confirmVariant="popup"
            icon={<LinkOffIcon />}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Confirm menu variant</Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">Icon</Typography>
          <UConfirmationButton
            onConfirm={handleDelete}
            id={5}
            buttonText="Delete"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">Menu item</Typography>
          <IconButton
            aria-label="more"
            aria-controls="menu-item-variant-confirm-menu"
            aria-haspopup="true"
            onClick={e => handleClick(e, 'menu')}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu-item-variant-confirm-menu"
            anchorEl={anchorEl.menu}
            keepMounted
            open={openMenuVariant}
            onClose={() => handleClose('menu')}
            disableEnforceFocus={true}
          >
            <MenuItem onClick={() => handleClose('menu')}>
              <Link href="#" underline="none">
                Edit
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleClose('menu')}>
              <Link href="#" underline="none">
                View
              </Link>
            </MenuItem>
            <UConfirmationButton
              onConfirm={handleDelete}
              id={6}
              buttonText="Delete"
              variant="menuItem"
              icon={null}
            />
          </Menu>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">Button</Typography>
          <UConfirmationButton
            onConfirm={handleDelete}
            id={7}
            buttonText="Delete"
            variant="button"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">Custom icon</Typography>
          <UConfirmationButton
            onConfirm={handleDelete}
            id={8}
            buttonText="Unlink"
            variant="button"
            confirmText="Confirm unlink?"
            confirmActionText="Yes, unlink"
            icon={<LinkOffIcon />}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
