import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'

import { InputLabelHelp } from '../Shared'

/**
 * UMobileTimePicker is a customized material UI Mobile Time Picker.
 * This component let's you access the calender to select particular dates.
 * Please have look at [Material UI Mobile Time Picker](https://mui.com/x/api/date-pickers/mobile-time-picker/) for more details
 */
export default function UMobileTimePicker({
  format = 'hh:mm a',
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
      <MobileTimePicker
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

UMobileTimePicker.propTypes = {
  /** Date picker format */
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
