import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDateTimePicker, DesktopDateTimePickerProps } from '@mui/x-date-pickers/DesktopDateTimePicker'
import UTextField from '../UTextField'
import { UDateTimePickerProps } from '../UDateTimePicker'

export interface UDesktopDateTimePickerProps
  extends Omit<DesktopDateTimePickerProps<Date>, 'renderInput' | 'value' | 'onChange'>,
    Pick<UDateTimePickerProps, 'inputFormat' | 'inputVariant' | 'showLabelHelp' | 'InputLabelHelpProps' | 'slotProps'> {
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
}

/**
 * UDesktopDateTimePicker is a customized material UI Date Time Picker.
 * This component let's you access the calender and clock to select the date and time.
 * Please have look at [Material UI Date Time Picker](https://mui.com/x/api/date-pickers/date-time-picker/) for more details
 */
export default function UDesktopDateTimePicker({
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
}: UDesktopDateTimePickerProps) {
  const dateTimeValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateTimePicker<Date>
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

