```jsx
import React, { useState, useRef } from "react";
// import {
//   UMobileDatePicker,
// } from '@unicef/material-ui';

import { UValidatorForm } from '../../index.js'

// export default function MobileDatePicker() {

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
   <UMobileDatePicker
      label="Date"
      value={selectedDate}
      onChange={handleDateChange}
    />
</UValidatorForm>;
//   )
// }
```