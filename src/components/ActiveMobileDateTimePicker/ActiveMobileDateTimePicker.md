```jsx
import React, { useState, useRef } from "react";
// import {
//   ActiveMobileDateTimePicker,
// } from '@unicef/material-ui';

import { UValidatorForm } from '../../index.js'

// export default function MobileDateTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  const form = useRef();

  const handleSubmit = () => {}

  // return (
<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
><ActiveMobileDateTimePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    /></UValidatorForm>;
//   )
// }
```