import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
  Box,
} from '@mui/material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import UButton from '../UButton'

const PREFIX = 'UConfirmationButton'

const classes = {
  menuDelete: `${PREFIX}-menuDelete`,
  menuLabel: `${PREFIX}-menuLabel`,
  span: `${PREFIX}-span`,
}

const StyledBox = styled('div')(({ theme }) => ({
  [`& .${classes.menuDelete}`]: {
    width: '500px',
  },

  [`& .${classes.menuLabel}`]: {
    color: theme.palette.primary.main,
  },

  [`& .${classes.span}`]: {
    marginLeft: theme.spacing(1),
  },
}))

const CONTROL_VARIANTS = {
  menuItem: 'menuItem',
  icon: 'icon',
  button: 'button',
}

const CONFIRMATION_VARIANTS = {
  menu: 'menu',
  popup: 'popup',
}

/**
 * UConfirmationButton is a component to get confirmation from the user before processing it.
 * This button displays the confirmation where user has clicked the button
 * It has two varint icon/menu item
 */
export default function UConfirmationButton({
  onConfirm,
  id,
  buttonText = 'Delete',
  enabled = true,
  variant = 'icon',
  icon = <DeleteOutlinedIcon />,
  confirmText = 'Confirm deletion?',
  confirmActionText = 'Yes, delete',
  cancelText = 'No',
  buttonVariant = 'text',
  confirmVariant = 'menu',
}) {
  const [deleteAnchorEl, setDeleteAnchorEl] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)

  const handleConfirm = e => {
    onConfirm && onConfirm(e, id)
    if (confirmVariant === CONFIRMATION_VARIANTS.popup) {
      setOpenDialog(false)
    } else {
      handleDeleteOptionClicked(e)
    }
  }

  const handleDeleteOptionClicked = e => {
    setDeleteAnchorEl(null)
  }

  const handleClick = e => {
    if (confirmVariant === CONFIRMATION_VARIANTS.popup) {
      setOpenDialog(true)
    } else {
      setDeleteAnchorEl(e.currentTarget)
    }
  }

  const handleCancelPopup = e => {
    setOpenDialog(false)
  }

  return (
    <StyledBox>
      {variant === CONTROL_VARIANTS.menuItem ? (
        <MenuItem onClick={handleClick} className={classes.menuLabel}>
          {icon}
          <Box component="span" className={icon ? classes.span : ''}>
            {buttonText}
          </Box>
        </MenuItem>
      ) : variant === CONTROL_VARIANTS.button ? (
        <UButton
          startIcon={icon}
          onClick={handleClick}
          aria-controls={`delete-confirmation-menu-${id}`}
          aria-haspopup="true"
          variant={buttonVariant}
        >
          {buttonText}
        </UButton>
      ) : (
        <Tooltip title={buttonText} placement="top">
          <IconButton
            aria-controls={`delete-confirmation-menu-${id}`}
            aria-haspopup="true"
            onClick={handleClick}
            disabled={!enabled}
            className={classes.menuLabel}
            size="large"
          >
            {icon}
          </IconButton>
        </Tooltip>
      )}
      {confirmVariant === CONFIRMATION_VARIANTS.popup ? (
        <Dialog id={`delete-confirmation-menu-${id}`} open={openDialog}>
          <DialogContent>
            <Typography variant="body1">{confirmText || ''}</Typography>
          </DialogContent>
          <DialogActions>
            <UButton onClick={handleCancelPopup} variant="uDefault">
              {cancelText || ''}
            </UButton>
            <UButton onClick={handleConfirm} variant="uPrimary" color="primary">
              {confirmActionText || ''}
            </UButton>
          </DialogActions>
        </Dialog>
      ) : (
        <Menu
          id={`delete-confirmation-menu-${id}`}
          anchorEl={deleteAnchorEl}
          keepMounted
          open={Boolean(deleteAnchorEl)}
          onClose={handleDeleteOptionClicked}
          className={classes.menuDelete}
        >
          <MenuItem disabled>{confirmText}</MenuItem>
          <MenuItem onClick={e => handleConfirm(e)}>
            {confirmActionText}
          </MenuItem>
        </Menu>
      )}
    </StyledBox>
  )
}

UConfirmationButton.propTypes = {
  /** Id of the button item */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** button or tooltip text */
  buttonText: PropTypes.string,
  /** trigger confirmation function */
  onConfirm: PropTypes.func.isRequired,
  /** variant: menuItem or icon or button */
  variant: PropTypes.oneOf([
    CONTROL_VARIANTS.menuItem,
    CONTROL_VARIANTS.icon,
    CONTROL_VARIANTS.button,
  ]),
  /** Confirm variant: popup or menu */
  confirmVariant: PropTypes.oneOf([
    CONFIRMATION_VARIANTS.popup,
    CONFIRMATION_VARIANTS.menu,
  ]),
  /** if the variant is menuitem, this prop make sure the item enable or not */
  enabled: PropTypes.bool,
  /** button cancel text for popup variant */
  cancelText: PropTypes.string,
  /** button confirm text */
  confirmText: PropTypes.string,
  /** confirm action text */
  confirmActionText: PropTypes.string,
  /** custom icon */
  icon: PropTypes.element,
  /** Button variant applied to menuItem button */
  buttonVariant: PropTypes.string,
}
