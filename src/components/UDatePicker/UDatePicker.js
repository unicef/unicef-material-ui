import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { InputLabelHelp } from '../Shared'
import { inputLabelClasses } from '@mui/material/InputLabel'

/**
 * UDatePicker is a customized material ui Date picker.
 *
 * This component let's you access the calender to select particular dates.
 * Please have look at [Material UI Date Picker](https://mui.com/x/react-date-pickers/date-picker/#main-content) for more details
 */
export default function UDatePicker({
  format = 'DD/MM/YYYY',
  label,
  onChange,
  value,
  showLabelHelp,
  sx,
  InputLabelHelpProps,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format={format}
        onChange={onChange}
        value={value}
        label={
          showLabelHelp ? (
            <InputLabelHelp inputLabel={label} {...InputLabelHelpProps} />
          ) : (
            label
          )
        }
        sx={{
          ...(sx ? sx : {}),
          ...(showLabelHelp
            ? {
                [`& .${inputLabelClasses.root}`]: {
                  pointerEvents: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                },
              }
            : {}),
        }}
        {...others}
      />
    </LocalizationProvider>
  )
}

UDatePicker.propTypes = {
  /** Date picker format */
  format: PropTypes.string,
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Value of the picker field */
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
  /**The system prop that allows defining system overrides as well as additional CSS styles. */
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]),
}
