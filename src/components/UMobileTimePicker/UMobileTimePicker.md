```jsx
import React, { useState } from "react";
// import {
//   UMobileTimePicker,
// } from '@unicef/material-ui';

// export default function MobileTimePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
   <UValidatorForm>
   <UMobileTimePicker
      label="Time"
      value={selectedDate}
      onChange={handleDateChange}
    />
    </UValidatorForm>;
//   )
// }
```