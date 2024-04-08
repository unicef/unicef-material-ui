```jsx
import React, { useState, useRef } from "react";
// import {
//   UTimePicker,
// } from '@unicef/material-ui';

import { UValidatorForm } from '../../index.js'

// export default function UTimePicker() {

const [selectedDate, handleDateChange] = useState(
  new Date()
);

const form = useRef();

const handleSubmit = () => {}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
>
  <UTimePicker
    label="Time"
    value={selectedDate}
    onChange={handleDateChange}
  />
</UValidatorForm>
//   )
// }
```