import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'

import UTextField from './../UTextField'

const PREFIX = 'ActiveTimePicker'

const classes = {
  root: `${PREFIX}-root`,
}

const StyledBox = styled(Box, {
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
 * ActiveTimePicker is a customized material ui time picker.
 * This component let's you access the clock to select the time.
 * Please have look at [Material UI Time Picker](https://mui.com/x/api/date-pickers/time-picker/) for more details
 */
export default function ActiveTimePicker({
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
  interactiveMode,
  readOnly,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledBox readOnly={readOnly} interactiveMode={interactiveMode}>
        <TimePicker
          className={classes.root}
          label={label}
          inputFormat={inputFormat}
          onChange={onChange}
          value={value}
          readOnly={readOnly}
          {...others}
          renderInput={params => (
            <UTextField
              showLabelHelp={showLabelHelp}
              slotProps={slotProps}
              InputLabelHelpProps={InputLabelHelpProps}
              variant={inputVariant}
              readOnly={readOnly}
              {...params}
            />
          )}
        />
      </StyledBox>
    </LocalizationProvider>
  )
}

ActiveTimePicker.propTypes = {
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Time picker format */
  inputFormat: PropTypes.string,
  /** Value of the picker field */
  value: PropTypes.string,
  /** Material ui textfield variant */
  inputVariant: PropTypes.string,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode: PropTypes.bool,
  /** Props applied to slots.*/
  slotProps: PropTypes.object,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}
