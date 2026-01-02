import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileTimePicker, MobileTimePickerProps } from '@mui/x-date-pickers/MobileTimePicker'
import UTextField from '../UTextField'
import { UTimePickerProps } from '../UTimePicker'

export interface UMobileTimePickerProps
  extends Omit<MobileTimePickerProps<Date>, 'renderInput' | 'value' | 'onChange'>,
    Pick<UTimePickerProps, 'inputFormat' | 'inputVariant' | 'showLabelHelp' | 'InputLabelHelpProps' | 'slotProps'> {
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
}

/**
 * UMobileTimePicker is a customized material UI Mobile Time Picker.
 * This component let's you access the clock to select particular time.
 * Please have look at [Material UI Mobile Time Picker](https://mui.com/x/api/date-pickers/mobile-time-picker/) for more details
 */
export default function UMobileTimePicker({
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
}: UMobileTimePickerProps) {
  const timeValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileTimePicker<Date>
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

