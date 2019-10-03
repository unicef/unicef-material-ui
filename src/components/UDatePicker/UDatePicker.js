import React from "react"
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  DatePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"

export default function UDatePicker(props) {

  // const [selectedDate, handleDateChange] = useState(
  //   new Date("2018-01-01T00:00:00.000Z")
  // )

  const { keyboardDatePicker, autoOk, variant, inputVariant, format, ...others } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {!keyboardDatePicker
        ? <DatePicker
          autoOk={autoOk}
          variant={variant}
          format={format || "dd-MMM-yyyy"}
          inputVariant={inputVariant}
          {...others}
        />
        : <KeyboardDatePicker
          autoOk={autoOk}
          variant={variant}
          format="dd/MM/yyyy"
          inputVariant={inputVariant}
          {...others}
        />
      }
    </MuiPickersUtilsProvider>
  );
}

UDatePicker.propTypes = {
  /** To enable to access Date Picker with keyboard */
  keyboardDatePicker: PropTypes.bool,
  /** autoOk on date select */
  autoOk: PropTypes.bool,
  /** Picker container option variant : 'dialog' | 'inline' | 'static' */
  variant: PropTypes.string,
  /** Material ui textfiled variant */
  inputVariant: PropTypes.string,
  /** date format */
  format: PropTypes.string,
}

UDatePicker.defaultProps = {
  inputVariant: "outlined",
  autoOk: true,
  variant: "inline",
  // format: "dd-MMM-yyyy",
}


