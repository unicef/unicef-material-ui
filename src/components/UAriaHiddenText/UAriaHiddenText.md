AriaHiddenText with examples :
```jsx
import React, { useState, useRef } from 'react'
// import {
//   UAriaHiddenText,
// } from '@unicef/material-ui';


import { UValidatorForm, UTextField, UAriaHiddenText } from '../../index.js'

const form = useRef()

const [formValues, setFormValues] = useState({ email: '' })

const handleSubmit = () => {}

const handleChange = e => {
  const { name, value } = e.target
  setFormValues({
    ...formValues,
    [name]: value,
  })
}

<UValidatorForm
  onSubmit={handleSubmit}
  ref={form}
  onError={errors => console.log(errors)}
  instantValidate={true}
  noValidate
>
  <UTextField
    label="Email"
    required
    onChange={handleChange}
    name="email"
    validators={['required', 'isEmail']}
    value={formValues.email}
    inputProps={{ 'aria-describedby': 'email-help' }}
  />
  <UAriaHiddenText
    id="email-help"
    text="Please enter email address"
  />
</UValidatorForm>
```
