import React from "react"
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"

/**
 * UKeyboardDateTimePicker is a customized [Material KeyboardDateTimePicker]('https://material-ui-pickers.dev/api/KeyboardDateTimePicker')
 */
export default function UKeyboardDateTimePicker(props) {

  const { autoOk, variant, inputVariant, ...others } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        autoOk={autoOk}
        variant={variant}
        inputVariant={inputVariant}
        {...others}
      />
    </MuiPickersUtilsProvider>
  );
}

UKeyboardDateTimePicker.propTypes = {
  /** autoOk on date select */
  autoOk: PropTypes.bool,
  /** Picker container option variant : 'dialog' | 'inline' | 'static' */
  variant: PropTypes.string,
  /** Material ui textfiled variant */
  inputVariant: PropTypes.string,
  /** date format */
  format: PropTypes.string,
}

UKeyboardDateTimePicker.defaultProps = {
  inputVariant: "outlined",
  autoOk: true,
  variant: "inline",
  format: "dd/MM/yyyy hh:mm a",
}


