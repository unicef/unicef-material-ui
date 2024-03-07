import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'

import UTextField from './../UTextField'

const PREFIX = 'ActiveDesktopDateTimePicker'

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
 * ActiveDesktopDateTimePicker is a customized material UI desktop date time picker.
 * This component let's you access the calender and clock to select the date and time.
 * Please have look at [Material UI Desktop Date Time Picker](https://mui.com/x/api/date-pickers/desktop-date-time-picker/) for more details
 */
export default function ActiveDesktopDateTimePicker({
  inputFormat,
  label,
  onChange,
  value,
  showLabelHelp,
  InputLabelProps,
  inputlabelhelpprops,
  inputVariant,
  interactiveMode,
  readOnly,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledBox readOnly={readOnly} interactiveMode={interactiveMode}>
        <DesktopDateTimePicker
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
              InputLabelProps={InputLabelProps}
              inputlabelhelpprops={inputlabelhelpprops}
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

ActiveDesktopDateTimePicker.propTypes = {
  /** Date time picker format */
  inputFormat: PropTypes.string,
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Value of the picker field */
  value: PropTypes.string,
  /** Material ui textfield variant */
  inputVariant: PropTypes.string,
  /** To make the content readOnly */
  readOnly: PropTypes.bool,
  /** Change to write mode by hiding text field border and displays border on hover*/
  interactiveMode: PropTypes.bool,
  /** Props applied to the InputLabel element.*/
  InputLabelProps: PropTypes.object,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g inputlabelhelpprops={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  inputlabelhelpprops: PropTypes.object,
}

ActiveDesktopDateTimePicker.defaultProps = {
  inputVariant: 'outlined',
  InputLabelProps: {
    shrink: true,
  },
  inputFormat: 'dd/MM/yyyy hh:mm a',
}
