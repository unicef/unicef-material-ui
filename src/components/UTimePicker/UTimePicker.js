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
 * UTimePicker is a customized material ui TimePicker.
 * This component let's you access the clock to select particular time.
 * Plese have look at [Material Ui TimePicker]('https://material-ui-pickers.dev/api/TimePicker') for more details
 */
export default function UTimePicker(props) {
  const {
    keyboardTimePicker,
    inputVariant,
    format,
    showLabelHelp,
    InputLabelProps,
    InputLabelHelpProps,
    label,
    ...others
  } = props

  return (
    <LocalizationProvider utils={AdapterDayjs}>
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

UTimePicker.propTypes = {
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

UTimePicker.defaultProps = {
  inputVariant: 'outlined',
  autoOk: true,
  variant: 'inline',
}
