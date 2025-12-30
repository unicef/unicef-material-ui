import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { pickersOutlinedInputClasses } from '@mui/x-date-pickers/PickersTextField'
import { inputAdornmentClasses } from '@mui/material/InputAdornment'

export default function ActiveDatePicker({
  inputFormat = 'dd/MM/yyyy',
  label,
  onChange,
  value,
  interactiveMode,
  readOnly,
  sx,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        sx={theme => ({
          ...(sx ? sx : {}),
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

ActiveDatePicker.propTypes = {
  /** Date picker format */
  inputFormat: PropTypes.string,
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Value of the picker field */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Material ui textfield variant */
  inputVariant: PropTypes.string,
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode: PropTypes.bool,
  /** Slot props.*/
  slotProps: PropTypes.object,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}
