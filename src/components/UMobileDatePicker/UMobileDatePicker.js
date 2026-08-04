import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { inputLabelClasses } from '@mui/material/InputLabel'
import { InputLabelHelp } from '../Shared'

/**
 * UMobileDatePicker is a customized material UI Mobile Date Picker.
 * This component let's you access the calender to select particular dates.
 * Please have look at [Material UI Mobile Date Picker](https://mui.com/x/api/date-pickers/mobile-date-picker/) for more details
 */
export default function UMobileDatePicker({
  format = 'DD/MM/YYYY',
  label,
  onChange,
  value,
  showLabelHelp,
  InputLabelHelpProps,
  sx,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
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

UMobileDatePicker.propTypes = {
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
