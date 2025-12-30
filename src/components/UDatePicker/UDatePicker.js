import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import UTextField from './../UTextField'

/**
 * UDatePicker is a customized material ui Date picker.
 *
 * This component let's you access the calender to select particular dates.
 * Please have look at [Material UI Date Picker](https://mui.com/x/react-date-pickers/date-picker/#main-content) for more details
 */
export default function UDatePicker({
  inputFormat = 'dd/MM/yyyy',
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
      <DatePicker
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

UDatePicker.propTypes = {
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
