import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import { InputLabelHelp } from '../Shared'

/**
 * UDateTimePicker is a customized material UI Date Time Picker.
 * This component let's you access the calender and clock to select the date and time.
 * Please have look at [Material UI Date Time Picker](https://mui.com/x/api/date-pickers/date-time-picker/) for more details
 */
export default function UDateTimePicker({
  format = 'dd/MM/yyyy hh:mm a',
  label,
  onChange,
  value,
  showLabelHelp,
  InputLabelHelpProps,
  slotProps = {
    textField: {
      InputLabelProps: {
        shrink: true,
      },
    },
  },
  variant = 'outlined',
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label={
          showLabelHelp ? (
            <InputLabelHelp inputLabel={label} {...InputLabelHelpProps} />
          ) : (
            label
          )
        }
        format={format}
        onChange={onChange}
        value={value}
        slotProps={slotProps}
        variant={variant}
        {...others}
      />
    </LocalizationProvider>
  )
}

UDateTimePicker.propTypes = {
  /** Date time picker format */
  format: PropTypes.string,
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Value of the picker field */
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  /** Material ui textfield variant */
  variant: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
  /** The props used for each slot inside. */
  slotProps: PropTypes.object,
}
