import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import UTextField from '../UTextField'

/**
 * UMobileDatePicker is a customized material UI Mobile Date Picker.
 * This component let's you access the calender to select particular dates.
 * Please have look at [Material UI Mobile Date Picker](https://mui.com/x/api/date-pickers/mobile-date-picker/) for more details
 */
export default function UMobileDatePicker({
  inputFormat = 'dd/MM/yyyy',
  label,
  onChange,
  value,
  showLabelHelp,
  InputLabelProps = {
    shrink: true,
  },
  InputLabelHelpProps,
  inputVariant = 'outlined',
  ...others
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        label={label}
        inputFormat={inputFormat}
        onChange={onChange}
        value={value}
        {...others}
        renderInput={params => (
          <UTextField
            showLabelHelp={showLabelHelp}
            InputLabelProps={InputLabelProps}
            InputLabelHelpProps={InputLabelHelpProps}
            variant={inputVariant}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  )
}

UMobileDatePicker.propTypes = {
  /** Date picker format */
  format: PropTypes.string,
  /** Callback function when change the picker field */
  onChange: PropTypes.func.isRequired,
  /** Value of the picker field */
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  /** Material ui textfield variant */
  inputVariant: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
  /** Props applied to the InputLabel element.*/
  InputLabelProps: PropTypes.object,
}
