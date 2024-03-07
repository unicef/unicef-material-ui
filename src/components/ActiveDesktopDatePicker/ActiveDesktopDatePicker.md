```jsx
import React, { useState, useRef } from "react";
// import {
//   ActiveDesktopDatePicker,
// } from '@unicef/material-ui';

import { UValidatorForm } from '../../index.js'

// export default function DesktopDatePicker() {

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
  // instantValidate={true}
><ActiveDesktopDatePicker
      label="Date"
      value={selectedDate}
      onChange={handleDateChange}
    /></UValidatorForm>;
//   )
// }
```