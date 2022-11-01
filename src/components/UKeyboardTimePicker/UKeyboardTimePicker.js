import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { InputLabelHelp } from '../Shared'

const styles = {
  labelRoot: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
}

/**
 * UKeyboardTimePicker is customized [ Material Ui KeyboardTimePicker](https://material-ui-pickers.dev/api/KeyboardTimePicker)
 */
export default function UKeyboardTimePicker(props) {
  const {
    inputVariant,
    format,
    showLabelHelp,
    InputLabelProps,
    InputLabelHelpProps,
    label,
    ...others
  } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        inputVariant={inputVariant}
        InputLabelProps={{
          ...InputLabelProps,
          style: { ...styles.labelRoot },
        }}
        label={
          showLabelHelp ? (
            <InputLabelHelp inputLabel={label} {...InputLabelHelpProps} />
          ) : (
            label
          )
        }
        {...others}
      />
    </LocalizationProvider>
  )
}

UKeyboardTimePicker.propTypes = {
  /** autoOk on time select */
  autoOk: PropTypes.bool,
  /** Picker container option variant : 'dialog' | 'inline' | 'static' */
  variant: PropTypes.string,
  /** Material ui textfiled variant */
  inputVariant: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}

UKeyboardTimePicker.defaultProps = {
  inputVariant: 'outlined',
  autoOk: true,
  variant: 'inline',
}
