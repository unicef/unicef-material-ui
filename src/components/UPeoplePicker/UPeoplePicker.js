import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MultiValue from './MultiValue'
import SingleValue from './SingleValue'
import Menu from './Menu'
import Control from './Control'
import NoOptionsMessage from './NoOptionsMessage'
import ValueContainer from './ValueContainer'
import Option from './Option'

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
  OptionsMessage: {
    padding: theme.spacing(1, 2),
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
    marginTop:
      props.TextFieldProps && props.TextFieldProps.helperText
        ? theme.spacing(-2.1)
        : theme.spacing(0.3),
  }),
  divider: {
    height: theme.spacing(2),
  },
}))

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  IndicatorSeparator: () => null,
  Option,
  SingleValue,
  ValueContainer,
}

/**
 * UPeoplePicker is a picking people from input control with below features
 * * Select single person from list
 * * Select Multiple people from list.
 * * Autocomplete.
 * * Search and filter the opions.
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

  const defaultTextFieldProps = {
    label: label,
    variant: variant,
    InputLabelProps: {
      shrink: true,
    },
  }

  const mergedTextFieldProps = { ...defaultTextFieldProps, ...TextFieldProps }

  return (
    <Select
      classes={classes}
      isClearable
      styles={selectStyles}
      components={components}
      TextFieldProps={mergedTextFieldProps}
      {...others}
    />
  )
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
   * `TextFieldProps={{helperText:"text", onChange: {textFieldTargetValue}, inputProps:{className: classes.textField}}}`
   *
   */
  TextFieldProps: PropTypes.object,
}

UPeoplePicker.defaultProps = {
  isMulti: false,
  placeholder: 'Select...',
  variant: 'outlined',
}
