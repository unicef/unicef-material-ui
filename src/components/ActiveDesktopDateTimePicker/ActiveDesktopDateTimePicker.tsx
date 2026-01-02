import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDateTimePicker, DesktopDateTimePickerProps } from '@mui/x-date-pickers/DesktopDateTimePicker'
import { pickersOutlinedInputClasses } from '@mui/x-date-pickers/PickersTextField'
import { inputAdornmentClasses } from '@mui/material/InputAdornment'
import { SxProps, Theme } from '@mui/material/styles'
import { ActiveDateTimePickerProps } from '../ActiveDateTimePicker'

export interface ActiveDesktopDateTimePickerProps
  extends Omit<DesktopDateTimePickerProps<Date>, 'value' | 'onChange' | 'sx'>,
    Pick<ActiveDateTimePickerProps, 'inputFormat' | 'inputVariant' | 'showLabelHelp' | 'InputLabelHelpProps' | 'slotProps' | 'interactiveMode' | 'readOnly' | 'sx'> {
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
}

/**
 * ActiveDesktopDateTimePicker is a customized material UI desktop date time picker.
 * This component let's you access the calender and clock to select the date and time.
 * Please have look at [Material UI Desktop Date Time Picker](https://mui.com/x/api/date-pickers/desktop-date-time-picker/) for more details
 */
export default function ActiveDesktopDateTimePicker({
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
  interactiveMode,
  readOnly,
  sx,
  ...others
}: ActiveDesktopDateTimePickerProps) {
  const dateTimeValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateTimePicker<Date>
        label={label}
        inputFormat={inputFormat}
        onChange={onChange}
        value={dateTimeValue}
        readOnly={readOnly}
        sx={(theme: Theme) => ({
          ...(sx ? (typeof sx === 'function' ? sx(theme) : sx) : {}),
          ...(readOnly && {
            [`& .${pickersOutlinedInputClasses.notchedOutline},&:hover .${pickersOutlinedInputClasses.notchedOutline},&.Mui-focused .${pickersOutlinedInputClasses.notchedOutline}`]:
              {
                borderColor: 'transparent !important',
              },
            [`& .${inputAdornmentClasses.root}`]: {
              display: 'none !important',
            },
          }),
          ...(interactiveMode &&
            !readOnly && {
              [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
                borderColor: 'transparent',
              },
              [`& .${pickersOutlinedInputClasses.root} .${inputAdornmentClasses.root}`]:
                {
                  display: 'none',
                },
              [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
                borderColor: theme.palette.divider,
              },
              [`&:hover .${inputAdornmentClasses.root},&.Mui-focused .${inputAdornmentClasses.root}`]:
                {
                  display: 'flex',
                },
            }),
        })}
        {...others}
      />
    </LocalizationProvider>
  )
}

