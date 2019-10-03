import React from "react"
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  TimePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers"

export default function UTimePicker(props) {

  // const [selectedDate, handleDateChange] = useState(
  //   new Date("2018-01-01T00:00:00.000Z")
  // )

  const { keyboardTimePicker, inputVariant, format, ...others } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {!keyboardTimePicker
        ? <TimePicker
          inputVariant={inputVariant}
          {...others}
        />
        : <KeyboardTimePicker
          inputVariant={inputVariant}
          {...others}
        />
      }
    </MuiPickersUtilsProvider>
  );
}

UTimePicker.propTypes = {
  autoOk: PropTypes.bool,
  variant: PropTypes.string,
  inputVariant: PropTypes.string,
}

UTimePicker.defaultProps = {
  inputVariant: "outlined",
  autoOk: true,
  variant: "inline",
}