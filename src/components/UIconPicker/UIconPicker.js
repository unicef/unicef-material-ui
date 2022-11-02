import React from 'react'
import PropTypes from 'prop-types'
import USelectPicker from '../USelectPicker'
/**
 * UIconPicker is a control for selecting icon from a list. Has the features below:
 *
 * * Select a single icon from a list.
 * * Select multiple icon from a list.
 * * Autocomplete.
 * * Clear current selection.
 *
 */
export default function UIconPicker(props) {
  return <USelectPicker {...props} hideAvatar={false} />
}

UIconPicker.propTypes = {
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
   * value: 1,
   * label: 'Sample 1', //First line, typically the name
   * image: 'svg', // image svg string
   * avatar: (  //Avatar object to display.
   *   <Avatar
   *     src={'blob:http://...'} // SVG Icon
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
  /** Props applied to the input label help element. E.g.  inputlabelhelpprops={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  inputlabelhelpprops: PropTypes.object,
}

UIconPicker.defaultProps = {
  isMulti: false,
  placeholder: 'Select...',
  variant: 'outlined',
  showNoOptionsWithEmptyTextField: true,
  showLabelHelp: false,
  inputlabelhelpprops: {},
}
