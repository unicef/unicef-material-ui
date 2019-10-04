```jsx
import React, { useState } from "react";
// import {
//   UTimePicker,
// } from '@unicef/material-ui';

// export default function UTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
    <UTimePicker
      label="Time"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```