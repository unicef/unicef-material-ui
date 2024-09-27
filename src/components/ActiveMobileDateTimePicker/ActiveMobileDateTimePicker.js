import React from 'react'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'

import UTextField from '../UTextField'

const PREFIX = 'ActiveMobileDateTimePicker'

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
 * ActiveMobileDateTimePicker is a customized material ui mobile date time picker.
 * This component let's you access the calender and clock to select the date and time.
 * Please have look at [Material UI Mobile Date Time Picker](https://mui.com/x/api/date-pickers/mobile-date-time-picker/) for more details
 */
export default function ActiveMobileDateTimePicker({
  inputFormat,
  label,
  onChange,
  value,
  showLabelHelp,
  slotProps = {
    inputLabel: {
      shrink: true,
    },
  },
  InputLabelHelpProps,
  inputVariant,
  interactiveMode,
  readOnly,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledDiv readOnly={readOnly} interactiveMode={interactiveMode}>
        <MobileDateTimePicker
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
      </StyledDiv>
    </LocalizationProvider>
  )
}

ActiveMobileDateTimePicker.propTypes = {
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
  /** The props used for each slot inside. */
  slotProps: PropTypes.object,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}

ActiveMobileDateTimePicker.defaultProps = {
  inputVariant: 'outlined',
  InputLabelProps: {
    shrink: true,
  },
  inputFormat: 'dd/MM/yyyy hh:mm a',
}
