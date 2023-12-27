import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
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
  labelRoot: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  inputHover: {
    '&:hover $notchedOutline': {
      borderColor: 'transparent',
    },
  },
  notchedOutline: {
    borderRadius: 2,
    borderColor: 'transparent',
  },
}))

const defaultComponents = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  IndicatorSeparator: () => null,
  Option,
  SingleValue,
  ValueContainer,
  MultiValueRemove: removeProps => <CancelIcon {...removeProps} />,
}

const ICON_VARIANTS = {
  dark: 'dark',
  light: 'light',
}

/**
 * USelectPicker is a control for selecting a option from a list. Has the features below:
 *
 * * Select a single option from a list.
 * * Select multiple option from a list.
 * * Autocomplete.
 * * Clear current selection.
 *
 */
export default function USelectPicker(props) {
  const classes = useStyles(props)
  const theme = useTheme()
  const {
    label,
    variant,
    TextFieldProps,
    showNoOptionsWithEmptyTextField,
    onInputChange,
    components,
    showLabelHelp,
    InputLabelProps,
    InputLabelHelpProps,
    hideAvatar,
    readOnly,
    lineByLineOption,
    isClearable,
    isSearchable,
    isDisabled,
    menuIsOpen,
    placeholder,
    iconVariant,
    ...others
  } = props

  const [isTextFieldEmpty, setIsTextFieldEmpty] = useState(true)

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    menu: base => ({ ...base, zIndex: '9999 !important' }),
  }

  const defaultTextFieldProps = {
    label: label,
    variant: variant,
    InputLabelProps: {
      shrink: true,
      classes: { root: classes.labelRoot },
      ...InputLabelProps,
    },
    readOnly,
    lineByLineOption,
    hideAvatar,
    showLabelHelp,
    InputLabelHelpProps,
  }
  // To show or hide the no options menu
  const showNoOptions = showNoOptionsWithEmptyTextField || !isTextFieldEmpty

  const mergedTextFieldProps = { ...defaultTextFieldProps, ...TextFieldProps }
  // handle the input change
  const handleInputChange = value => {
    setIsTextFieldEmpty(value === '')
    onInputChange && onInputChange(value)
  }

  const extraComponents = {}
  if (iconVariant === ICON_VARIANTS.dark)
    extraComponents.DropdownIndicator = () => (
      <span style={{ color: theme.palette.text.secondary }}>
        <ArrowDropDownIcon />
      </span>
    )
  if (readOnly) extraComponents.DropdownIndicator = () => null

  const selectPlaceholder = readOnly ? '' : placeholder

  return (
    <Select
      classes={classes}
      styles={selectStyles}
      components={{ ...defaultComponents, ...components, ...extraComponents }}
      TextFieldProps={mergedTextFieldProps}
      onInputChange={value => handleInputChange(value)}
      noOptionsMessage={() => (showNoOptions ? NoOptionsMessage : null)}
      isClearable={readOnly ? false : isClearable}
      isSearchable={readOnly ? false : isSearchable}
      isDisabled={readOnly ? true : isDisabled}
      menuIsOpen={readOnly ? false : menuIsOpen}
      placeholder={selectPlaceholder}
      {...others}
    />
  )
}

USelectPicker.propTypes = {
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
  /** To customize the components of select */
  components: PropTypes.object,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g.  InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
  /** Hide people avatar */
  hideAvatar: PropTypes.bool,
  /** Is the read only field or not */
  readOnly: PropTypes.bool,
  /** Whether the selected options displayed in the new line or not in multiple selected options */
  lineByLineOption: PropTypes.bool,
  /** Is the select value clearable */
  isClearable: PropTypes.bool,
  /** Whether to enable search functionality */
  isSearchable: PropTypes.bool,
  /** Whether the input is disabled */
  isDisabled: PropTypes.bool,
  /** Whether the menu is open */
  menuIsOpen: PropTypes.bool,
  /** Down arrow variant */
  iconVariant: PropTypes.oneOf([ICON_VARIANTS.dark, ICON_VARIANTS.light]),
}

USelectPicker.defaultProps = {
  isMulti: false,
  placeholder: 'Select...',
  variant: 'outlined',
  showNoOptionsWithEmptyTextField: true,
  showLabelHelp: false,
  InputLabelHelpProps: {},
  hideAvatar: true,
  readOnly: false,
  isClearable: undefined,
  isSearchable: true,
  isDisabled: false,
  menuIsOpen: undefined,
  lineByLineOption: false,
  iconVariant: ICON_VARIANTS.light,
}
