import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { pickersOutlinedInputClasses } from '@mui/x-date-pickers/PickersTextField'
import { inputAdornmentClasses } from '@mui/material/InputAdornment'
import { inputLabelClasses } from '@mui/material/InputLabel'

import { InputLabelHelp } from '../Shared'

const PREFIX = 'ActiveMobileTimePicker'

const classes = {
  root: `${PREFIX}-root`,
}

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'readOnly' && prop !== 'interactiveMode',
})(({ readOnly, interactiveMode }) => ({
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
 * ActiveMobileTimePicker is a customized material ui mobile time picker.
 * This component let's you access the clock to select the time.
 * Please have look at [Material UI Mobile Time Picker](https://mui.com/x/api/date-pickers/mobile-time-picker/) for more details
 */

export default function ActiveMobileTimePicker({
  format = 'hh:mm a',
  label,
  onChange,
  value,
  showLabelHelp,
  InputLabelHelpProps,
  interactiveMode,
  readOnly,
  sx,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledBox readOnly={readOnly} interactiveMode={interactiveMode}>
        <MobileTimePicker
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
            ...(showLabelHelp
              ? {
                  [`& .${inputLabelClasses.root}`]: {
                    pointerEvents: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                  },
                }
              : {}),
          })}
          {...others}
        />
      </StyledBox>
    </LocalizationProvider>
  )
}

ActiveMobileTimePicker.propTypes = {
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Time picker format */
  format: PropTypes.string,
  /** Value of the picker field */
  value: PropTypes.string,
  /** Material ui textfield variant */
  inputVariant: PropTypes.string,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode: PropTypes.bool,
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  /** Props applied to slots.*/
  slotProps: PropTypes.object,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}
