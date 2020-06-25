import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export default function Option(props) {
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
        {props.data.avatar ? (
          props.data.avatar
        ) : (
          <Avatar width="32" height="32" />
        )}
        <Box fontSize={14} pl={1} display="flex" flexDirection="column">
          <Typography variant="subtitle2">{props.data.label}</Typography>
          <Box fontSize={12}>{props.data.subLabel}</Box>
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
