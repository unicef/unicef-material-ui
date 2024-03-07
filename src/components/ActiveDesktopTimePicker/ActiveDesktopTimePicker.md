```jsx
import React, { useState, useRef } from 'react'
// import {
//   ActiveDesktopTimePicker,
// } from '@unicef/material-ui';

import { UValidatorForm } from '../../index.js'

// export default function DesktopTimePicker() {

const [selectedTime, handleTimeChange] = useState(new Date())

const form = useRef();

const handleSubmit = () => {}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
><ActiveDesktopTimePicker
  label="Time"
  value={selectedTime}
  onChange={handleTimeChange}
/></UValidatorForm>
//   )
// }
```
