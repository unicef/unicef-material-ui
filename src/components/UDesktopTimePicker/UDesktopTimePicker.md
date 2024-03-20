```jsx
import React, { useState } from "react";
// import {
//   UDesktopTimePicker,
// } from '@unicef/material-ui';

// export default function DesktopTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UValidatorForm><UDesktopTimePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    /></UValidatorForm>;
//   )
// }
```