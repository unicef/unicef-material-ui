import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  Typography,
  DialogActions,
} from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import UButton from '../UButton'

const useStyles = makeStyles(theme => ({
  menuDelete: {
    width: '500px',
  },
  menuLabel: {
    color: theme.palette.primary.main,
  },
  span: {
    marginLeft: theme.spacing(1),
  },
}))

const CONTROL_VARIANTS = {
  popup: 'popup',
  menuItem: 'menuItem',
  icon: 'icon',
}

/**
 * UConfirmationButton is a component to get confirmation from the user before processing it.
 * This button displays the confirmation where user has clicked the button
 * It has two varint icon/menu item
 */
export default function UConfirmationButton(props) {
  const classes = useStyles()
  const {
    onConfirm,
    id,
    buttonText,
    enabled,
    variant,
    icon,
    confirmText,
    confirmActionText,
    cancelText,
  } = props
  const [deleteAnchorEl, setDeleteAnchorEl] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)

  const handleConfirm = e => {
    onConfirm && onConfirm(e, id)
    if (variant !== CONTROL_VARIANTS.popup) handleDeleteOptionClicked(e)
  }

  const handleDeleteOptionClicked = e => {
    setDeleteAnchorEl(null)
  }

  const handleClick = e => {
    if (variant !== CONTROL_VARIANTS.popup) setDeleteAnchorEl(e.currentTarget)
    else setOpenDialog(true)
  }

  const handleCancelPopup = e => {
    setOpenDialog(false)
  }

  return (
    <React.Fragment>
      {variant === CONTROL_VARIANTS.menuItem ? (
        <MenuItem onClick={handleClick} className={classes.menuLabel}>
          {icon}
          <span className={classes.span}>{buttonText}</span>
        </MenuItem>
      ) : (
        <Tooltip title={buttonText} placement="top">
          <IconButton
            aria-controls={`delete-confirmation-menu-${id}`}
            aria-haspopup="true"
            onClick={handleClick}
            disabled={!enabled}
            className={classes.menuLabel}
          >
            {icon}
          </IconButton>
        </Tooltip>
      )}
      {variant === CONTROL_VARIANTS.popup ? (
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
    </React.Fragment>
  )
}

UConfirmationButton.propTypes = {
  /** Id of the button item */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** button or tooltip text */
  buttonText: PropTypes.string,
  /** trigger confirmation function */
  onConfirm: PropTypes.func.isRequired,
  /** variant: menu or icon */
  variant: PropTypes.oneOf([
    CONTROL_VARIANTS.popup,
    CONTROL_VARIANTS.menuItem,
    CONTROL_VARIANTS.icon,
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
}

UConfirmationButton.defaultProps = {
  buttonText: 'Delete',
  variant: 'icon',
  enabled: true,
  confirmText: 'Confirm deletion?',
  confirmActionText: 'Yes, delete',
  cancelText: 'No',
  icon: <DeleteOutlinedIcon />,
}
