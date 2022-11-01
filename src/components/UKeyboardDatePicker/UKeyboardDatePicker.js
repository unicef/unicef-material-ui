import React from 'react'
import PropTypes from 'prop-types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { InputLabelHelp } from '../Shared'

const styles = {
  labelRoot: {
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
}

/**
 * UDatePicker is a customized [Material Ui KeyboardDatePicker]('https://material-ui-pickers.dev/api/KeyboardDatePicker') for more details
 */
export default function UKeyboardDatePicker(props) {
  const {
    autoOk,
    variant,
    inputVariant,
    showLabelHelp,
    InputLabelProps,
    InputLabelHelpProps,
    label,
    ...others
  } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        autoOk={autoOk}
        variant={variant}
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

UKeyboardDatePicker.propTypes = {
  /** autoOk on date select */
  autoOk: PropTypes.bool,
  /** Picker container option variant : 'dialog' | 'inline' | 'static' */
  variant: PropTypes.string,
  /** Material ui textfiled variant */
  inputVariant: PropTypes.string,
  /** date format */
  format: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Show label help */
  showLabelHelp: PropTypes.bool,
  /** Props applied to the input label help element. E.g InputLabelHelpProps={{type:'link', label:'Help', link:'unicef.github.io', icon, tooltipTitle: 'Tooltip title', tooltipPlacement: 'bottom}} */
  InputLabelHelpProps: PropTypes.object,
}

UKeyboardDatePicker.defaultProps = {
  inputVariant: 'outlined',
  autoOk: true,
  variant: 'inline',
  format: 'dd/MM/yyyy',
}
