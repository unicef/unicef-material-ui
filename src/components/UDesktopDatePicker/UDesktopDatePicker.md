```jsx
import React, { useState } from "react";
// import {
//   UDesktopDatePicker,
// } from '@unicef/material-ui';

// export default function DesktopDatePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UDesktopDatePicker
      label="Date"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```