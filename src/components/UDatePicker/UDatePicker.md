```jsx
import React, { useState } from "react";
// import {
//   UDatePicker,
// } from '@unicef/material-ui';

// export default function DatePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UDatePicker
      label="Date"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```