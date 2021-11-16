```jsx
import React, { useState } from 'react'
// import {
//   ActiveTimePicker,
// } from '@unicef/material-ui';

// export default function TimePicker() {

const [selectedTime, handleTimeChange] = useState(new Date())

// return (
;<ActiveTimePicker
  label="Time"
  value={selectedTime}
  onChange={handleTimeChange}
/>
//   )
// }
```
