```jsx
import React, { useState } from "react";
// import {
//   ActiveDesktopDateTimePicker,
// } from '@unicef/material-ui';

// export default function DesktopDateTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <ActiveDesktopDateTimePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```