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
 * UPeoplePicker is a control for selecting people from a list. Has the features below:
 *
 * * Select a single person from a list.
 * * Select multiple people from a list.
 * * Autocomplete.
 * * Clear current selection.
 *
 */
export default function UPeoplePicker(props) {
  const classes = useStyles(props)
  const theme = useTheme()

  const {
    label,
    variant,
    TextFieldProps,
    showNoOptionsWithEmptyTextField,
    ...others
  } = props

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
      noOptionsMessage={() =>
        showNoOptionsWithEmptyTextField ? NoOptionsMessage : null
      }
      {...others}
    />
  )
}

UPeoplePicker.propTypes = {
  /** Text to display when nothing is selected. */
  placeholder: PropTypes.string,
  /** Enables the multiple select. Default is false. */
  isMulti: PropTypes.bool,
  /** Label of the picker. */
  label: PropTypes.string,
  /** Variant of TextField to use. Default is outlined.*/
  variant: PropTypes.oneOf(['outlined', 'standard', 'filled']),
  /** Id to assign to the input element */
  inputId: PropTypes.string,
  /** Callback fired when the value is changed.
   *
   * `event`:
   * The event source of the callback. You can pull out the new value by accessing "event.target.value".
   */
  onChange: PropTypes.func,
  /** Array of to display select on the dropdown.
   * Each option is an object with the following attributes:
   *
   * ```
   * {
   * value: 3,
   * label: 'Kundal Singh Mehra', //First line, typically the name
   * subLabel: 'Back-end Developer', // Second line, typically position or email
   * avatar: (  //Avatar object to display.
   *   <Avatar
   *     src={'http://...'}
   *   />
   *  ),
   *   }
   *```
   *
   */
  options: PropTypes.array,
  /** Props passed to the TextField used in the picker. Use any value of Material UI TextField API.
   *
   * `TextFieldProps={{helperText:"text", onChange: {textFieldTargetValue}, inputProps:{className: classes.textField}}}`
   *
   */
  TextFieldProps: PropTypes.object,
  /**
   * To show or hide the no options message on empty texfield value
   */
  showNoOptionsWithEmptyTextField: PropTypes.bool,
  /**
   *  To display error message on loading options
   */
  errorLoadingOptions: PropTypes.string,
}

UPeoplePicker.defaultProps = {
  isMulti: false,
  placeholder: 'Select...',
  variant: 'outlined',
  showNoOptionsWithEmptyTextField: true,
}
