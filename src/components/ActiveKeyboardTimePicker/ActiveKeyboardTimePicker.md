```jsx
import React, { useState } from 'react'
// import {
//   ActiveKeyboardTimePicker,
// } from '@unicef/material-ui';

// export default function TimePicker() {

const [selectedTime, handleTimeChange] = useState(new Date())

// return (
;<ActiveKeyboardTimePicker
  label="Time"
  value={selectedTime}
  onChange={handleTimeChange}
/>
//   )
// }
```
