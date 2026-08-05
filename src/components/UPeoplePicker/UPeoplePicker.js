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
    multiple = false,
    placeholder = 'Select...',
    showLabelHelp = false,
    InputLabelHelpProps = {},
    ...rest
  } = props
  return (
    <USelectPicker
      multiple={multiple}
      placeholder={placeholder}
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
  multiple: PropTypes.bool,
  /** Label of the picker. */
  label: PropTypes.string,
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
   *  To display error message on loading options
   */
  errorLoadingOptions: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g.  InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}
