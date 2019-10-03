import React, { useState } from "react"
import {
  UDatePicker,
  UTimePicker,
} from 'unicef-material-ui'
import { Grid, Typography } from "@material-ui/core";

export default function Pickers() {

  const [selectedDate, handleDateChange] = useState(
    new Date()
  )

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" >
          Date picker
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UDatePicker
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UDatePicker
          keyboardDatePicker
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" >
          Time picker
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UTimePicker
          label="Time"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UTimePicker
          keyboardTimePicker
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </Grid>
  )
}

