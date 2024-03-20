```jsx
import React, { useState } from "react";
// import {
//   UMobileDatePicker,
// } from '@unicef/material-ui';

// export default function MobileDatePicker() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  );

  // return (
<UValidatorForm>
   <UMobileDatePicker
      label="Date"
      value={selectedDate}
      onChange={handleDateChange}
    />
</UValidatorForm>;
//   )
// }
```