import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker'
import UTextField from '../UTextField'

/**
 * UDesktopTimePicker is a customized material UI Desktop Time Picker.
 * This component let's you access the calender to select particular dates.
 * Please have look at [Material UI Desktop Time Picker](https://mui.com/x/api/date-pickers/desktop-time-picker/) for more details
 */

export default function UDesktopTimePicker({
  inputFormat = 'hh:mm a',
  label,
  onChange,
  value,
  showLabelHelp,
  slotProps = {
    inputLabel: { shrink: true },
  },
  InputLabelHelpProps,
  inputVariant = 'outlined',
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        label={label}
        inputFormat={inputFormat}
        onChange={onChange}
        value={value}
        {...others}
        renderInput={params => (
          <UTextField
            showLabelHelp={showLabelHelp}
            slotProps={slotProps}
            InputLabelHelpProps={InputLabelHelpProps}
            variant={inputVariant}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  )
}

UDesktopTimePicker.propTypes = {
  /** Date picker format */
  inputFormat: PropTypes.string,
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Value of the picker field */
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  /** Material ui textfield variant */
  inputVariant: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
  /** Props applied to slots.*/
  slotProps: PropTypes.object,
}
