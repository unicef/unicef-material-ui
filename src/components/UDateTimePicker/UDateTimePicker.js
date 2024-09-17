import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import UTextField from '../UTextField'

/**
 * UDateTimePicker is a customized material UI Date Time Picker.
 * This component let's you access the calender and clock to select the date and time.
 * Please have look at [Material UI Date Time Picker](https://mui.com/x/api/date-pickers/date-time-picker/) for more details
 */

export default function UDateTimePicker({
  inputFormat = 'dd/MM/yyyy hh:mm a',
  label,
  onChange,
  value,
  showLabelHelp,
  InputLabelProps = {
    shrink: true,
  },
  InputLabelHelpProps,
  inputVariant = 'outlined',
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label={label}
        inputFormat={inputFormat}
        onChange={onChange}
        value={value}
        {...others}
        renderInput={params => (
          <UTextField
            showLabelHelp={showLabelHelp}
            InputLabelProps={InputLabelProps}
            InputLabelHelpProps={InputLabelHelpProps}
            variant={inputVariant}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  )
}

UDateTimePicker.propTypes = {
  /** Date time picker format */
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
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
  /** Props applied to the InputLabel element.*/
  InputLabelProps: PropTypes.object,
}
