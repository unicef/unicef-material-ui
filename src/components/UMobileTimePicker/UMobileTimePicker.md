```jsx
import React, { useState, useRef } from "react";
// import {
//   UMobileTimePicker,
// } from '@unicef/material-ui';

import { UValidatorForm } from '../../index.js'

// export default function MobileTimePicker() {

const [selectedDate, handleDateChange] = useState(
  new Date()
);

const form = useRef();

const handleSubmit = () => {}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
>
   <UMobileTimePicker
      label="Time"
      value={selectedDate}
      onChange={handleDateChange}
    />
</UValidatorForm>;
//   )
// }
```