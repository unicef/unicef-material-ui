```jsx
import React, { useState } from "react";
// import {
//   UKeyboardDatePicker,
// } from '@unicef/material-ui';

// export default function KeyboardDatePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UKeyboardDatePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```