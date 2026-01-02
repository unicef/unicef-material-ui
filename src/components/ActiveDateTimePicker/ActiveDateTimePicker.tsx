import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker'
import { pickersOutlinedInputClasses } from '@mui/x-date-pickers/PickersTextField'
import { inputAdornmentClasses } from '@mui/material/InputAdornment'
import { SxProps, Theme } from '@mui/material/styles'

export interface ActiveDateTimePickerProps
  extends Omit<DateTimePickerProps<Date>, 'value' | 'onChange' | 'sx'> {
  /** Date time picker format */
  inputFormat?: string
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
  /** Material ui textfield variant */
  inputVariant?: string
  /** To make the content readOnly */
  readOnly?: boolean
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode?: boolean
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>
  /** Props applied to slots.*/
  slotProps?: Record<string, any>
  /** Label text */
  label?: string
  /** Show label help */
  showLabelHelp?: boolean
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps?: Record<string, any>
}

/**
 * ActiveDateTimePicker is a customized material UI Date Time Picker.
 * This component let's you access the calender and clock to select the date and time.
 * Please have look at [Material UI Date Time Picker](https://mui.com/x/api/date-pickers/date-time-picker/) for more details
 */

export default function ActiveDateTimePicker({
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
}: ActiveDateTimePickerProps) {
  const dateTimeValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker<Date>
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

