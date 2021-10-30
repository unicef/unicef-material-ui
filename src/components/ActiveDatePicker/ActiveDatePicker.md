```jsx
import React, { useState } from 'react'
// import {
//   ActiveDatePicker,
// } from '@unicef/material-ui';

// export default function DatePicker() {

const [selectedDate, handleDateChange] = useState(new Date())

// return (
;<ActiveDatePicker
  label="Date"
  value={selectedDate}
  onChange={handleDateChange}
/>
//   )
// }
```
