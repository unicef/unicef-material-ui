```jsx
import React, { useState, useRef } from 'react'
// import {
//   ActiveDatePicker,
// } from '@unicef/material-ui';

import { UValidatorForm } from '../../index.js'

// export default function DatePicker() {

const [selectedDate, handleDateChange] = useState(new Date())

const form = useRef()

const handleSubmit = () => {}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  // instantValidate={true}
><ActiveDatePicker
  label="Date"
  value={selectedDate}
  onChange={handleDateChange}
/>
</UValidatorForm>
//   )
// }
```
