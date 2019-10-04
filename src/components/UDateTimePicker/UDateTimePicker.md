```jsx
import React, { useState } from "react";
// import {
//   UDateTimePicker,
// } from '@unicef/material-ui';

// export default function DateTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UDateTimePicker
      label="Date and Time"
      value={selectedDate}
      onChange={handleDateChange}
    />;
//   )
// }
```