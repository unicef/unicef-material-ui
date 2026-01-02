import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker'
import UTextField from '../UTextField'

export interface UDateTimePickerProps
  extends Omit<DateTimePickerProps<Date>, 'renderInput' | 'value' | 'onChange'> {
  /** Date time picker format */
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
  slotProps = {
    inputLabel: { shrink: true },
  },
  InputLabelHelpProps,
  inputVariant = 'outlined',
  ...others
}: UDateTimePickerProps) {
  const dateTimeValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker<Date>
        label={label}
        inputFormat={inputFormat}
        onChange={onChange}
        value={dateTimeValue}
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

