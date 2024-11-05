import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { useTheme, styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'

import MultiValue from './MultiValue'
import SingleValue from './SingleValue'
import Menu from './Menu'
import Control from './Control'
import NoOptionsMessage from './NoOptionsMessage'
import ValueContainer from './ValueContainer'
import Option from './Option'
import Input from './Input'

const PREFIX = 'USelectPicker'

const classes = {
  input: `${PREFIX}-input`,
  valueContainer: `${PREFIX}-valueContainer`,
  OptionsMessage: `${PREFIX}-OptionsMessage`,
  placeholder: `${PREFIX}-placeholder`,
  paper: `${PREFIX}-paper`,
  divider: `${PREFIX}-divider`,
  labelRoot: `${PREFIX}-labelRoot`,
  inputHover: `${PREFIX}-inputHover`,
  notchedOutline: `${PREFIX}-notchedOutline`,
}

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'hasHelpText',
})(({ theme, hasHelpText }) => ({
  [`& .${classes.input}`]: {
    display: 'flex',
    padding: '10px 14px',
    height: 'auto',
  },
  [`& .${classes.valueContainer}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  [`& .${classes.OptionsMessage}`]: {
    padding: theme.spacing(1, 2),
  },
  [`& .${classes.paper}`]: {
    position: 'absolute',
    zIndex: 999,
    left: 0,
    right: 0,
    marginTop: hasHelpText ? theme.spacing(-3) : theme.spacing(0),
  },
  [`& .${classes.divider}`]: {
    height: theme.spacing(2),
  },
  [`& .${classes.labelRoot}`]: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  [`& .${classes.inputHover}`]: {
    '&:hover $notchedOutline': {
      borderColor: 'transparent',
    },
  },
  [`& .${classes.notchedOutline}`]: {
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
  Input,
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
  const theme = useTheme()
  const {
    label,
    variant = 'outlined',
    TextFieldProps,
    showNoOptionsWithEmptyTextField = true,
    onInputChange,
    components,
    showLabelHelp = false,
    InputLabelProps,
    InputLabelHelpProps = {},
    hideAvatar = true,
    readOnly = false,
    lineByLineOption = false,
    isClearable = undefined,
    isSearchable = true,
    isDisabled = false,
    menuIsOpen = undefined,
    placeholder = 'Select...',
    iconVariant = ICON_VARIANTS.light,
    isMulti = false,
    noOptionsText = 'No options',
    loadingText = 'Loading...',
    ...others
  } = props

  const [isTextFieldEmpty, setIsTextFieldEmpty] = useState(true)

  const selectStyles = {
    input: base => ({
      ...base,
      height: iconVariant === ICON_VARIANTS.dark ? theme.spacing(4) : 'inherit', // if dark variant, then match height with material ui controls
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    menu: base => ({ ...base, zIndex: '9999 !important', boxShadow: 'none' }),
    placeholder: base => ({
      ...base,
      position: 'absolute',
      left: theme.spacing(2),
    }),
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
    <StyledBox
      hasHelpText={
        props.TextFieldProps && props.TextFieldProps.helperText ? true : false
      }
    >
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
        isMulti={isMulti}
        noOptionsText={noOptionsText}
        loadingText={loadingText}
        {...others}
      />
    </StyledBox>
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
  /** No options text */
  noOptionsText: PropTypes.string,
  /** Loading text */
  loadingText: PropTypes.string,
}
