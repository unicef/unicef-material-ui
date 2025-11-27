import React from 'react'
import PropTypes from 'prop-types'
import USelectPicker from '../USelectPicker'
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
  const {
    isMulti = false,
    placeholder = 'Select...',
    variant = 'outlined',
    showNoOptionsWithEmptyTextField = true,
    showLabelHelp = false,
    InputLabelHelpProps = {},
    ...rest
  } = props
  return (
    <USelectPicker
      isMulti={isMulti}
      placeholder={placeholder}
      variant={variant}
      showNoOptionsWithEmptyTextField={showNoOptionsWithEmptyTextField}
      showLabelHelp={showLabelHelp}
      InputLabelHelpProps={InputLabelHelpProps}
      {...rest}
      hideAvatar={false}
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
}
