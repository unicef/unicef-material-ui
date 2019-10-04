```jsx
import React, { useState } from "react";
// import {
//   UKeyboardDateTimePicker,
// } from '@unicef/material-ui';

// export default function KeyboardDateTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UKeyboardDateTimePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```