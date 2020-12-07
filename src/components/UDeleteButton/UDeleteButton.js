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
}))

/**
 * DeleteButton is a component to get confirmation from the user before deleting it.
 * This delete button displays the delete confirmation where user has clicked the delete button
 * It has two varint icon/menu item
 */
export default function UDeleteButton(props) {
  const classes = useStyles()
  const { onConfirm, id, tooltipText, enabled, variant, ...others } = props
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
          <DeleteOutlinedIcon className={classes.icon} />
          {tooltipText}
        </MenuItem>
      ) : (
        <Tooltip title={tooltipText} placement="top">
          <IconButton
            aria-controls={`delete-confirmation-menu-${id}`}
            aria-haspopup="true"
            onClick={e => setDeleteAnchorEl(e.currentTarget)}
            disabled={!enabled}
          >
            <DeleteOutlinedIcon />
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
        <MenuItem disabled>Confirm deletion</MenuItem>
        <MenuItem onClick={e => handleConfirm(e)}>Yes, delete</MenuItem>
      </Menu>
    </React.Fragment>
  )
}

UDeleteButton.propTypes = {
  /** Id of the delete item */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** delete button tooltip */
  tooltipText: PropTypes.string,
  /**trigger delete confirmation function */
  onConfirm: PropTypes.func.isRequired,
  /** variant deletion : menu or icon */
  variant: PropTypes.oneOf(['menuItem', 'icon']),
  /** if the variant is menuitem, this prop make sure detele item enable or not */
  enabled: PropTypes.bool,
}

UDeleteButton.defaultProps = {
  tooltipText: 'Delete',
  variant: 'icon',
  enabled: true,
}
