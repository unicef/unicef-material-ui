```jsx
import React, { useState, useRef } from "react";
// import {
//   UDateTimePicker,
// } from '@unicef/material-ui';

import { UValidatorForm } from '../../index.js'

// export default function DateTimePicker() {

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
   <UDateTimePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    /></UValidatorForm>;
//   )
// }
```