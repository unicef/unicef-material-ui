import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import { pickersOutlinedInputClasses } from '@mui/x-date-pickers/PickersTextField'
import { inputAdornmentClasses } from '@mui/material/InputAdornment'
import { SxProps, Theme } from '@mui/material/styles'

export interface ActiveDatePickerProps
  extends Omit<DatePickerProps<Date>, 'value' | 'onChange' | 'sx'> {
  /** Date picker format */
  inputFormat?: string
  /** Callback function when change the picker field */
  onChange: (value: Date | null) => void
  /** Value of the picker field */
  value?: Date | string | null
  /** Material ui textfield variant */
  inputVariant?: string
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>
  /** To make the content readOnly */
  readOnly?: boolean
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode?: boolean
  /** Slot props.*/
  slotProps?: Record<string, any>
  /** Label text */
  label?: string
  /** Show label help */
  showLabelHelp?: boolean
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps?: Record<string, any>
}

export default function ActiveDatePicker({
  inputFormat = 'dd/MM/yyyy',
  label,
  onChange,
  value,
  interactiveMode,
  readOnly,
  sx,
  ...others
}: ActiveDatePickerProps) {
  const dateValue = value instanceof Date ? value : value ? new Date(value) : null

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker<Date>
        label={label}
        value={dateValue}
        onChange={onChange}
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

