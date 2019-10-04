```jsx
import React, { useState } from "react";
// import {
//   UKeyboardTimePicker,
// } from '@unicef/material-ui';

// export default function KeyboardTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UKeyboardTimePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```