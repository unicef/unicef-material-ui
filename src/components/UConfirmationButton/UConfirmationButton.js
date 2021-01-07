import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Tooltip, IconButton, Menu, MenuItem } from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

const useStyles = makeStyles(theme => ({
  menuDelete: {
    width: '500px',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  span: {
    marginLeft: theme.spacing(1),
  },
}))

/**
 * UConfirmationButton is a component to get confirmation from the user before processing it.
 * This button displays the confirmation where user has clicked the button
 * It has two varint icon/menu item
 */
export default function UConfirmationButton(props) {
  const classes = useStyles()
  const { onConfirm, id, buttonText, enabled, variant, icon, confirmText, confirmActionText, ...others } = props
  const [deleteAnchorEl, setDeleteAnchorEl] = useState(null)

  const handleConfirm = e => {
    onConfirm(e, id)
    handleDeleteOptionClicked(e)
  }

  const handleDeleteOptionClicked = e => {
    setDeleteAnchorEl(null)
  }
  return (
    <React.Fragment>
      {variant === 'menuItem' ? (
        <MenuItem onClick={e => setDeleteAnchorEl(e.currentTarget)}>
          {icon}
          <span className={classes.span}>{buttonText}</span>
        </MenuItem>
      ) : (
          <Tooltip title={buttonText} placement="top">
            <IconButton
              aria-controls={`delete-confirmation-menu-${id}`}
              aria-haspopup="true"
              onClick={e => setDeleteAnchorEl(e.currentTarget)}
              disabled={!enabled}
            >
              {icon}
            </IconButton>
          </Tooltip>
        )}
      <Menu
        id={`delete-confirmation-menu-${id}`}
        anchorEl={deleteAnchorEl}
        keepMounted
        open={Boolean(deleteAnchorEl)}
        onClose={handleDeleteOptionClicked}
        className={classes.menuDelete}
      >
        <MenuItem disabled>{confirmText}</MenuItem>
        <MenuItem onClick={e => handleConfirm(e)}>{confirmActionText}</MenuItem>
      </Menu>
    </React.Fragment>
  )
}

UConfirmationButton.propTypes = {
  /** Id of the delete item */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** delete button text */
  buttonText: PropTypes.string,
  /** trigger delete confirmation function */
  onConfirm: PropTypes.func.isRequired,
  /** variant deletion : menu or icon */
  variant: PropTypes.oneOf(['menuItem', 'icon']),
  /** if the variant is menuitem, this prop make sure detele item enable or not */
  enabled: PropTypes.bool,
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
  icon: <DeleteOutlinedIcon />
}
