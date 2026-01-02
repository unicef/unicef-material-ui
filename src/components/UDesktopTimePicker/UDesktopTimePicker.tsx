import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopTimePicker, DesktopTimePickerProps } from '@mui/x-date-pickers/DesktopTimePicker'
import UTextField from '../UTextField'
import { UTimePickerProps } from '../UTimePicker'

export interface UDesktopTimePickerProps
  extends Omit<DesktopTimePickerProps<Date>, 'renderInput' | 'value' | 'onChange'>,
    Pick<UTimePickerProps, 'inputFormat' | 'inputVariant' | 'showLabelHelp' | 'InputLabelHelpProps' | 'slotProps'> {
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
}

/**
 * UDesktopTimePicker is a customized material UI Desktop Time Picker.
 * This component let's you access the clock to select particular time.
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
}: UDesktopTimePickerProps) {
  const timeValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker<Date>
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

