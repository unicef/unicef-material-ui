import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker'
import { pickersOutlinedInputClasses } from '@mui/x-date-pickers/PickersTextField'
import { inputAdornmentClasses } from '@mui/material/InputAdornment'
import { SxProps, Theme } from '@mui/material/styles'
import { ActiveDatePickerProps } from '../ActiveDatePicker'

export interface ActiveDesktopDatePickerProps
  extends Omit<DesktopDatePickerProps<Date>, 'value' | 'onChange' | 'sx'>,
    Pick<ActiveDatePickerProps, 'inputFormat' | 'inputVariant' | 'showLabelHelp' | 'InputLabelHelpProps' | 'slotProps' | 'interactiveMode' | 'readOnly' | 'sx'> {
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
}

/**
 * ActiveDesktopDatePicker is a customized material UI Desktop Date Picker.
 * This component let's you access the calender to select particular dates.
 * Please have look at [Material UI Desktop Date Picker](https://mui.com/x/api/date-pickers/desktop-date-picker/) for more details
 */

export default function ActiveDesktopDatePicker({
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
  interactiveMode,
  readOnly,
  sx,
  ...others
}: ActiveDesktopDatePickerProps) {
  const dateValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker<Date>
        label={label}
        inputFormat={inputFormat}
        onChange={onChange}
        value={dateValue}
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

