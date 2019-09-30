import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import clsx from 'clsx'
import Select from 'react-select'
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles(theme => ({
  input: {
    display: 'flex',
    padding: '10px 14px',
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    marginLeft: theme.spacing(0.5),
    marginTop: theme.spacing(0.25)
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  avatar: {
    height: 24,
    width: 24,
    marginRight: theme.spacing(1),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    display: 'inline-flex',
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: props => ({
    position: 'absolute',
    zIndex: 999,
    left: 0,
    right: 0,
    marginTop: props.TextFieldProps && props.TextFieldProps.helperText ? theme.spacing(-1.5) : theme.spacing(1)
  }),
  divider: {
    height: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2, 0),
  },
}))

/** Styling the component with custom styles */
const StyledAvatar = styled(Avatar)`
  && {
    height: 32px
    width: 32px
  }
`

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

NoOptionsMessage.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props to be passed on to the wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
}

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props

  return (
    <TextField
      fullWidth
      variant="outlined"
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  )
}

Control.propTypes = {
  /**
   * Children to render.
   */
  children: PropTypes.node,
  /**
   * The mouse down event and the innerRef to pass down to the controller element.
   */
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired,
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]).isRequired,
  selectProps: PropTypes.object.isRequired,
}

function Option(props) {
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
        <Avatar width="32" height="32" src={props.data.imageUrl} />
        <Box fontSize={14} pl={1} display="flex" flexDirection="column">
          <Typography variant="span">{props.data.label}</Typography>
          <Box fontSize={12}>{props.data.subtitle}</Box>
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
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired,
  }).isRequired,
  /**
   * Inner ref to DOM Node
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]).isRequired,
  /**
   * Whether the option is focused.
   */
  isFocused: PropTypes.bool.isRequired,
  /**
   * Whether the option is selected.
   */
  isSelected: PropTypes.bool.isRequired,
}

function Placeholder(props) {
  const { selectProps, innerProps = {}, children } = props
  return (
    <Typography color="textSecondary" {...innerProps}>
      {children}
    </Typography>
  )
}

Placeholder.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      <Avatar src={props.data.imageUrl} className={props.selectProps.classes.avatar} />
      {props.children}
    </Typography>
  )
}

SingleValue.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.any.isRequired,
  selectProps: PropTypes.object.isRequired,
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  )
}

ValueContainer.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
}

function handlePush(props) {
  // return alert('Hey, what you doing')
}

function MultiValue(props) {
  return (
    <Chip
      variant="outlined"
      avatar={<StyledAvatar src={props.data.imageUrl} />}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onClick={() => handlePush(props)}
      onDelete={props.removeProps.onClick}
      deleteIcon={< CancelIcon {...props.removeProps} />}
    />
  )
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool.isRequired,
  removeProps: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired,
  }).isRequired,
  selectProps: PropTypes.object.isRequired,
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {
        props.isLoading
          ? <Box p={2}> Loading ....</Box>
          : props.children
      }
    </Paper>
  )
}

Menu.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.element.isRequired,
  /**
   * Props to be passed to the menu wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  IndicatorSeparator: () => null,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
}

/**
 * UPeoplePicker is a picking people from input control with below features
 * * Select single person from list
 * * Select Multiple people from list.
 * * Autocomplete.
 * * Search and filter the options.
 * * Clear selected.
 *
 */
export default function UPeoplePicker(props) {
  const classes = useStyles(props)
  const theme = useTheme()

  const { label, variant, TextFieldProps, ...others } = props

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  }

  UPeoplePicker.propTypes = {
    /** Text to display in input when nothing selected. */
    placeholder: PropTypes.string,
    /** Enables the multiple select. */
    isMulti: PropTypes.bool,
    /** Label of the textfield. */
    label: PropTypes.string,
    /** Variant of textfield to use.*/
    variant: PropTypes.oneOf(['outlined', 'standard', 'filled']),
    /** Id of input to handle in some scenarios. */
    inputId: PropTypes.string,
    /** Callback fired when the value is changed.
     *
     * `event`:
     * The event source of the callback. You can pull out the new value by accessing "event.target.value".
     */
    onChange: PropTypes.func,
    /** Options to select from dropdown.
     *
   * `const suggestions = [ {label: "name1" }, {label: "name2"} ]` // which is an array of objects
    *
   * `options = {suggestions}`
    */
    options: PropTypes.array,
    /** It accepts all the props from TextField API.
     *
    * `TextFieldProps={helperText = "text", inputProps={className: classes.textField}}`
     *
     */
    TextFieldProps: PropTypes.object,
  }

  UPeoplePicker.defaultProps = {
    isMulti: false,
    placeholder: 'Select...',
    variant: 'outlined',
  }

  const defaultTextFieldProps = {
    label: label,
    variant: 'outlined',
    InputLabelProps: {
      shrink: true,
    },
  }


  const mergedTextFieldProps = { ...defaultTextFieldProps, ...TextFieldProps }

  return (
    <div className={classes.margin}>
      <Select
        classes={classes}
        styles={selectStyles}
        components={components}
        TextFieldProps={mergedTextFieldProps}
        {...others}
      />
    </div>
  )
}
