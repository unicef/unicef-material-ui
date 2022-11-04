```jsx
import React, { useState } from "react";
// import {
//   ActiveMobileDatePicker,
// } from '@unicef/material-ui';

// export default function MobileDatePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <ActiveMobileDatePicker
      label="Date"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```