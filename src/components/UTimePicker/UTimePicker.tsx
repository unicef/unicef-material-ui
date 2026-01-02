import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker, TimePickerProps } from '@mui/x-date-pickers/TimePicker'
import UTextField from './../UTextField'

export interface UTimePickerProps
  extends Omit<TimePickerProps<any>, 'renderInput' | 'value' | 'onChange'> {
  /** Time picker format */
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
 * UTimePicker is a customized material ui TimePicker.
 *
 * This component let's you access the clock to select particular time.
 * Please have look at [Material Ui TimePicker](https://mui.com/x/api/date-pickers/time-picker/#main-content) for more details
 */
export default function UTimePicker({
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
}: UTimePickerProps) {
  const timeValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={label}
        inputFormat={inputFormat}
        onChange={onChange}
        value={timeValue}
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

