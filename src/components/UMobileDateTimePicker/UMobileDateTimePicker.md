```jsx
import React, { useState } from "react";
// import {
//   UMobileDateTimePicker,
// } from '@unicef/material-ui';

// export default function MobileDateTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UValidatorForm>
      <UMobileDateTimePicker
        label="Date and Time"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </UValidatorForm>;
//   )
// }
```