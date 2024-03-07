import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import UTextField from './../UTextField'

/**
 * UTimePicker is a customized material ui TimePicker.
 *
 * This component let's you access the clock to select particular time.
 * Please have look at [Material Ui TimePicker](https://mui.com/x/api/date-pickers/time-picker/#main-content) for more details
 */
export default function UTimePicker({
  inputFormat,
  label,
  onChange,
  value,
  showLabelHelp,
  InputLabelProps,
  inputlabelhelpprops,
  inputVariant,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={label}
        inputFormat={inputFormat}
        onChange={onChange}
        value={value}
        {...others}
        renderInput={params => (
          <UTextField
            showLabelHelp={showLabelHelp}
            InputLabelProps={InputLabelProps}
            inputlabelhelpprops={inputlabelhelpprops}
            variant={inputVariant}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  )
}

UTimePicker.propTypes = {
  /** Time picker format */
  inputFormat: PropTypes.string,
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Value of the picker field */
  value: PropTypes.string,
  /** Material ui textfield variant */
  inputVariant: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g inputlabelhelpprops={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  inputlabelhelpprops: PropTypes.object,
  /** Props applied to the InputLabel element.*/
  InputLabelProps: PropTypes.object,
}

UTimePicker.defaultProps = {
  inputVariant: 'outlined',
  InputLabelProps: {
    shrink: true,
  },
  inputFormat: 'hh:mm a',
}
