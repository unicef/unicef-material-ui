import React, { useState } from 'react'
import {
  UPeoplePicker,
  UDatePicker,
  UTimePicker,
  UKeyboardDatePicker,
  UKeyboardTimePicker,
  UDateTimePicker,
  UKeyboardDateTimePicker,
} from 'unicef-material-ui'
import { Grid, Typography, Avatar } from '@material-ui/core'

export default function Pickers() {
  // People picker options
  const peopleOptions = [
    {
      value: 1,
      label: 'Juan Merlos Tevar',
      subLabel: 'Manager',
      avatar: null,
    },
    {
      value: 2,
      label: 'Suresh Sevarthi',
      subLabel: 'Front-end Developer',
      avatar: null,
    },
    {
      value: 3,
      label: 'Kundal Singh Mehra',
      subLabel: 'Back-end Developer',
      avatar: (
        <Avatar
          src={
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixvalue=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }
        />
      ),
    },
    {
      value: 4,
      label: 'Gia Zarina Santos',
      subLabel: 'Manager',
      avatar: (
        <Avatar
          src={
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixvalue=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }
        />
      ),
    },
    {
      value: 5,
      label: 'Cory Kleinschmidt',
      subLabel: 'Information technology specialist',
      avatar: (
        <Avatar
          src={
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixvalue=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }
        />
      ),
    },
    {
      value: 6,
      label: 'Renga Narayanan',
      subLabel: 'Back-end Developer',
      avatar: (
        <Avatar
          src={
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }
        />
      ),
    },
  ]

  const [selectedDate, handleDateChange] = useState(new Date())
  const [options, setOptions] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [errorMessage] = useState(null)

  // Handle loading the people
  const handleLoadPeople = event => {
    setLoading(true)
    setOptions(undefined)
    // In case of API, fetch the API
    //If response is ok, set the new options
    setTimeout(() => {
      setLoading(false)
      setOptions(peopleOptions)
    }, 1000)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '16px 0px' }}>
          People picker
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Select"
          placeholder="Select people ..."
          options={peopleOptions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Multi Select"
          TextFieldProps={{
            helperText: 'Please select multiple people from list',
          }}
          placeholder="Select people ..."
          options={peopleOptions}
          isMulti
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Loading state example"
          isLoading={true}
          placeholder="Select people ..."
          options={peopleOptions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Async example"
          isLoading={loading}
          placeholder="Select people ..."
          options={options}
          TextFieldProps={{
            onChange: event => handleLoadPeople(event),
          }}
          showNoOptionsWithEmptyTextField={false}
          errorOptionsMessage={errorMessage}
          isMulti
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Display error on load"
          isLoading={false}
          placeholder="Select people ..."
          options={undefined}
          errorOptionsMessage={'Could not load options'}
          isMulti
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UPeoplePicker
          label="Display validation error"
          isLoading={false}
          placeholder="Select people ..."
          options={undefined}
          TextFieldProps={{
            error: true,
            helperText: 'Validation error message',
          }}
          isMulti
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Date picker</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UDatePicker
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UKeyboardDatePicker
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Time picker</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UTimePicker
          label="Time"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UKeyboardTimePicker
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Date Time picker</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UDateTimePicker
          label="Date and Time"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <UKeyboardDateTimePicker
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </Grid>
  )
}
