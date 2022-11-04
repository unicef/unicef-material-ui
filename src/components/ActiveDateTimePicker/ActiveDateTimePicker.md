```jsx
import React, { useState } from "react";
// import {
//   ActiveDateTimePicker,
// } from '@unicef/material-ui';

// export default function DateTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <ActiveDateTimePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```