```jsx
import React, { useState, useRef } from "react";
// import {
//   UDesktopTimePicker,
// } from '@unicef/material-ui';

import { UValidatorForm } from '../../index.js'

// export default function DesktopTimePicker() {

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
  <UDesktopTimePicker
    label="Date and Time"
    value={selectedDate}
    onChange={handleDateChange}
  />
</UValidatorForm>;
//   )
// }
```