```jsx
import React, { useState } from 'react'
// import {
//   ActiveKeyboardDateTimePicker,
// } from '@unicef/material-ui';

// export default function DatePicker() {

const [selectedDate, handleDateChange] = useState(new Date())

// return (
;<ActiveKeyboardDateTimePicker
  label="Date"
  value={selectedDate}
  onChange={handleDateChange}
/>
//   )
// }
```
