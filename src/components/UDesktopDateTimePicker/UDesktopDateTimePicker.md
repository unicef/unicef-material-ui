```jsx
import React, { useState } from "react";
// import {
//   UDesktopDateTimePicker,
// } from '@unicef/material-ui';

// export default function DesktopDateTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UDesktopDateTimePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```