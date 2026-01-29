import React, { useState, useRef } from 'react'
import { Typography, Grid } from '@mui/material'
import {
  UAriaLive,
  UAriaHiddenText,
  UTextField,
  UValidatorForm,
} from '@unicef/material-ui'

export default function Accessibility() {
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
  return (
    <>
      <Typography variant="h6">Aria live</Typography>
      <UAriaLive type="alert" role="alert" text="Please fill the form" />
      <Typography variant="h6">Aria hidden text</Typography>
      <UValidatorForm
        onSubmit={handleSubmit}
        ref={form}
        onError={errors => console.log(errors)}
        instantValidate={true}
        noValidate
      >
        <Grid container>
          <Grid size={{ xs: 12, lg: 3, xl: 2 }}>
            <UTextField
              label="Email"
              required
              onChange={handleChange}
              name="email"
              validators={['required', 'isEmail']}
              value={formValues.email}
              slotProps={{ htmlInput: { 'aria-describedby': 'email-help' } }}
            />
            <UAriaHiddenText
              id="email-help"
              text="Please enter email address"
            />
          </Grid>
        </Grid>
      </UValidatorForm>
    </>
  )
}
