import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker, MobileDatePickerProps } from '@mui/x-date-pickers/MobileDatePicker'
import UTextField from '../UTextField'
import { UDatePickerProps } from '../UDatePicker'

export interface UMobileDatePickerProps
  extends Omit<MobileDatePickerProps<Date>, 'renderInput' | 'value' | 'onChange'>,
    Pick<UDatePickerProps, 'inputFormat' | 'inputVariant' | 'showLabelHelp' | 'InputLabelHelpProps' | 'slotProps'> {
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
}

/**
 * UMobileDatePicker is a customized material UI Mobile Date Picker.
 * This component let's you access the calender to select particular dates.
 * Please have look at [Material UI Mobile Date Picker](https://mui.com/x/api/date-pickers/mobile-date-picker/) for more details
 */
export default function UMobileDatePicker({
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
}: UMobileDatePickerProps) {
  const dateValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker<Date>
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

