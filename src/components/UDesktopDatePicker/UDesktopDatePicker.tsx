import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker'
import UTextField from '../UTextField'
import { UDatePickerProps } from '../UDatePicker'

export interface UDesktopDatePickerProps
  extends Omit<DesktopDatePickerProps<Date>, 'renderInput' | 'value' | 'onChange'>,
    Pick<UDatePickerProps, 'inputFormat' | 'inputVariant' | 'showLabelHelp' | 'InputLabelHelpProps' | 'slotProps'> {
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
}

/**
 * UDesktopDatePicker is a customized material UI Desktop Date Picker.
 * This component let's you access the calender to select particular dates.
 * Please have look at [Material UI Desktop Date Picker](https://mui.com/x/api/date-pickers/desktop-date-picker/) for more details
 */

export default function UDesktopDatePicker({
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
}: UDesktopDatePickerProps) {
  const dateValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker<Date>
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

