```jsx
import React, { useState } from "react";
// import {
//   ActiveDesktopDatePicker,
// } from '@unicef/material-ui';

// export default function DesktopDatePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <ActiveDesktopDatePicker
      label="Date"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```