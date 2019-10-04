import React from "react"
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"

/**
 * UDatePicker is a customized [Material Ui KeyboardDatePicker]('https://material-ui-pickers.dev/api/KeyboardDatePicker') for more details
 */
export default function UKeyboardDatePicker(props) {

  const { autoOk, variant, inputVariant, ...others } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk={autoOk}
        variant={variant}
        inputVariant={inputVariant}
        {...others}
      />
    </MuiPickersUtilsProvider>
  );
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
}

UKeyboardDatePicker.defaultProps = {
  inputVariant: "outlined",
  autoOk: true,
  variant: "inline",
  format: "dd/MM/yyyy",
}


