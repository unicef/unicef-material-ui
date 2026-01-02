import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
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
} as const

const CONFIRMATION_VARIANTS = {
  menu: 'menu',
  popup: 'popup',
} as const

export type ControlVariant = typeof CONTROL_VARIANTS[keyof typeof CONTROL_VARIANTS]
export type ConfirmationVariant = typeof CONFIRMATION_VARIANTS[keyof typeof CONFIRMATION_VARIANTS]

export interface UConfirmationButtonProps {
  /** Id of the button item */
  id: number | string
  /** button or tooltip text */
  buttonText?: string
  /** trigger confirmation function */
  onConfirm: (e: React.MouseEvent, id: number | string) => void
  /** variant: menuItem or icon or button */
  variant?: ControlVariant
  /** Confirm variant: popup or menu */
  confirmVariant?: ConfirmationVariant
  /** if the variant is menuitem, this prop make sure the item enable or not */
  enabled?: boolean
  /** button cancel text for popup variant */
  cancelText?: string
  /** button confirm text */
  confirmText?: string
  /** confirm action text */
  confirmActionText?: string
  /** custom icon */
  icon?: React.ReactElement
  /** Button variant applied to menuItem button */
  buttonVariant?: string
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
}: UConfirmationButtonProps) {
  const [deleteAnchorEl, setDeleteAnchorEl] = useState<null | HTMLElement>(null)
  const [openDialog, setOpenDialog] = useState(false)

  const handleConfirm = (e: React.MouseEvent) => {
    onConfirm(e, id)
    if (confirmVariant === CONFIRMATION_VARIANTS.popup) {
      setOpenDialog(false)
    } else {
      handleDeleteOptionClicked(e)
    }
  }

  const handleDeleteOptionClicked = (e: React.MouseEvent) => {
    setDeleteAnchorEl(null)
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (confirmVariant === CONFIRMATION_VARIANTS.popup) {
      setOpenDialog(true)
    } else {
      setDeleteAnchorEl(e.currentTarget)
    }
  }

  const handleCancelPopup = () => {
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

