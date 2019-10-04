import React from "react"
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"

/**
 * UKeyboardTimePicker is customized [ Material Ui KeyboardTimePicker](https://material-ui-pickers.dev/api/KeyboardTimePicker)
 */
export default function UKeyboardTimePicker(props) {

  const { inputVariant, format, ...others } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        inputVariant={inputVariant}
        {...others}
      />
    </MuiPickersUtilsProvider>
  );
}

UKeyboardTimePicker.propTypes = {
  /** autoOk on time select */
  autoOk: PropTypes.bool,
  /** Picker container option variant : 'dialog' | 'inline' | 'static' */
  variant: PropTypes.string,
  /** Material ui textfiled variant */
  inputVariant: PropTypes.string,
}

UKeyboardTimePicker.defaultProps = {
  inputVariant: "outlined",
  autoOk: true,
  variant: "inline",
}