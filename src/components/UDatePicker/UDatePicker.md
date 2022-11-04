```jsx
import React, { useState } from "react";
// import {
//   UDatePicker,
// UValidatorForm
// } from '@unicef/material-ui';

// export default function DatePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
    <UValidatorForm>
   <UDatePicker
      label="Date"
      value={selectedDate}
      onChange={handleDateChange}
    /></UValidatorForm>;
//   )
// }
```