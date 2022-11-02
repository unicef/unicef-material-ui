import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import UTextField from '../UTextField'

/**
 * UMobileDateTimePicker is a customized material UI Date Time Picker.
 * This component let's you access the calender and clock to select the date and time.
 * Please have look at [Material UI Date Time Picker]('https://mui.com/x/api/date-pickers/date-time-picker/') for more details
 */
export default function UMobileDateTimePicker({
  format,
  label,
  onChange,
  value,
  showLabelHelp,
  InputLabelProps,
  inputlabelhelpprops,
  inputVariant,
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateTimePicker
        label={label}
        format={format}
        onChange={onChange}
        value={value}
        {...others}
        renderInput={params => (
          <UTextField
            showLabelHelp={showLabelHelp}
            InputLabelProps={InputLabelProps}
            inputlabelhelpprops={inputlabelhelpprops}
            variant={inputVariant}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  )
}

UMobileDateTimePicker.propTypes = {
  /** Date time picker format */
  format: PropTypes.string,
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Value of the picker field */
  value: PropTypes.string,
  /** Material ui textfield variant */
  inputVariant: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g inputlabelhelpprops={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  inputlabelhelpprops: PropTypes.object,
}
