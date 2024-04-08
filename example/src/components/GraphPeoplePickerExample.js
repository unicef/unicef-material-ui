import React from 'react'
import { UGraphPeoplePicker } from 'unicef-material-ui'
import { Typography, Grid } from '@mui/material'
import { Message } from '@mui/icons-material'

export default function GraphPeoplePickerExample() {
  //set the initial users
  const totalUsers = [
    {
      name: 'Renga',
      value: 'Renga',
      email: 'renga@email.com',
      subLabel: 'renga@email.com',
    },
  ]
  // async method call to graph api
  const searchUsers = event => async () => {
    try {
      console.log(event) // it has user entered value
      await sleep(2000)
      //call api to get the user information
      const result = {
        loading: false,
        errorMessage: null,
        graphData: [
          {
            displayName: 'Renga',
            mail: 'renga@email.com',
            jobTitle: '',
            mobile: '',
            phone: '',
            category: '',
            level: '',
            value: 'renga@mail.com',
            label: 'Renga',
            subLable: 'Renga',
            imageUrl: null,
          },
          {
            displayName: 'Juan',
            mail: 'juan@email.com',
            jobTitle: '',
            mobile: '',
            phone: '',
            category: '',
            level: '',
            value: 'juan@mail.com',
            label: 'Juan',
            subLable: 'Juan',
            imageUrl: null,
          },
        ],
      }
      return result
    } catch {
      console.log('error')
      return { loading: false, errorMessage: Message, graphData: [] }
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const handleChange = value => {
    //logic to handle after user leaves the graph people picker
    console.log(value)
  }
  const getOptions = users =>
    users.map(user => ({
      name: user.name,
      value: user.email,
      email: user.email,
      subLabel: user.email,
    }))

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '32px 0px' }}>
          Graph people picker
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <UGraphPeoplePicker
          type="users"
          label="Users"
          fullWidth
          options={getOptions(totalUsers)}
          onBlur={value => handleChange(value)}
          searchUsers={searchUsers()}
          isMultiple={true}
        />
      </Grid>
    </Grid>
  )
}
