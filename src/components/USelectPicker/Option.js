import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Option(props) {
  const hideAvatar =
    props.selectProps &&
    props.selectProps.TextFieldProps &&
    props.selectProps.TextFieldProps.hideAvatar
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      <React.Fragment>
        {hideAvatar ? (
          ''
        ) : props.data.avatar ? (
          props.data.avatar
        ) : (
          <Avatar width="32" height="32" />
        )}
        <Box
          sx={{
            fontSize: 14,
            pl: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="subtitle2">{props.data.label}</Typography>
          <Box
            sx={{
              fontSize: 12,
            }}
          >
            {props.data.subLabel}
          </Box>
        </Box>
      </React.Fragment>
    </MenuItem>
  )
}

Option.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.shape({
    id: PropTypes.string,
    key: PropTypes.string,
    onClick: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseOver: PropTypes.func,
    tabIndex: PropTypes.number,
  }),
  /**
   * Inner ref to DOM Node
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any,
    }),
  ]),
  /**
   * Whether the option is focused.
   */
  isFocused: PropTypes.bool,
  /**
   * Whether the option is selected.
   */
  isSelected: PropTypes.bool,
}
