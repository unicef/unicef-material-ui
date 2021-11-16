```jsx
import React, { useState } from 'react'
// import {
//   ActiveKeyboardDatePicker,
// } from '@unicef/material-ui';

// export default function DatePicker() {

const [selectedDate, handleDateChange] = useState(new Date())

// return (
;<ActiveKeyboardDatePicker
  label="Date"
  value={selectedDate}
  onChange={handleDateChange}
/>
//   )
// }
```
