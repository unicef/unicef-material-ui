import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'

import { InputLabelHelp } from '../Shared'

const PREFIX = 'ActiveDateTimePicker'

const classes = {
  root: `${PREFIX}-root`,
}

const StyledDiv = styled('div', {
  shouldForwardProp: prop => prop !== 'readOnly' && prop !== 'interactiveMode',
})(({ theme, readOnly, interactiveMode }) => ({
  [`& .${classes.root}`]: {
    ...(readOnly
      ? {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'transparent',
          },
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'transparent',
          },
          [`& .${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
            {
              borderColor: 'transparent',
            },
        }
      : {}),
    ...(!readOnly && !interactiveMode
      ? {}
      : {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'transparent',
          },
        }),
  },
}))

/**
 * ActiveDateTimePicker is a customized material UI Date Time Picker.
 * This component let's you access the calender and clock to select the date and time.
 * Please have look at [Material UI Date Time Picker](https://mui.com/x/api/date-pickers/date-time-picker/) for more details
 */
export default function ActiveDateTimePicker({
  format = 'dd/MM/yyyy hh:mm a',
  label,
  onChange,
  value,
  showLabelHelp,
  InputLabelHelpProps,
  slotProps = {
    textField: {
      InputLabelProps: {
        shrink: true,
      },
    },
  },
  variant = 'outlined',
  interactiveMode,
  readOnly,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledDiv readOnly={readOnly} interactiveMode={interactiveMode}>
        <DateTimePicker
          className={classes.root}
          label={
            showLabelHelp ? (
              <InputLabelHelp inputLabel={label} {...InputLabelHelpProps} />
            ) : (
              label
            )
          }
          format={format}
          onChange={onChange}
          value={value}
          readOnly={readOnly}
          slotProps={slotProps}
          variant={variant}
          {...others}
        />
      </StyledDiv>
    </LocalizationProvider>
  )
}

ActiveDateTimePicker.propTypes = {
  /** Date time picker format */
  format: PropTypes.string,
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Value of the picker field */
  value: PropTypes.string,
  /** Material ui textfield variant */
  variant: PropTypes.string,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode: PropTypes.bool,
  /** The props used for each slot inside. */
  slotProps: PropTypes.object,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}
