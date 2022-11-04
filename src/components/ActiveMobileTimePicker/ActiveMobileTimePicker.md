```jsx
import React, { useState } from 'react'
// import {
//   ActiveDesktopTimePicker,
// } from '@unicef/material-ui';

// export default function DesktopTimePicker() {

const [selectedTime, handleTimeChange] = useState(new Date())

// return (
;<ActiveDesktopTimePicker
  label="Time"
  value={selectedTime}
  onChange={handleTimeChange}
/>
//   )
// }
```
