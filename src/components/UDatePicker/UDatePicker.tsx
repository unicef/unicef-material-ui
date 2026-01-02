import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import UTextField from './../UTextField'

export interface UDatePickerProps
  extends Omit<DatePickerProps<Date>, 'renderInput' | 'value' | 'onChange'> {
  /** Date picker format */
  inputFormat?: string
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
  /** Material ui textfield variant */
  inputVariant?: 'outlined' | 'filled' | 'standard'
  /** Label text */
  label?: string
  /** Show label help */
  showLabelHelp?: boolean
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps?: Record<string, any>
  /** Props applied to slots.*/
  slotProps?: Record<string, any>
}

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
}: UDatePickerProps) {
  const dateValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker<Date>
        label={label}
        inputFormat={inputFormat}
        onChange={onChange}
        value={dateValue}
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

