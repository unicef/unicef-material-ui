import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Button,
  Box,
  Checkbox,
  MenuItem,
  Radio,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Grid,
  List,
  ListItem,
  Avatar,
} from '@material-ui/core'
import {
  UTextField,
  UPositiveInteger,
  UPeoplePicker,
  UValidatorForm,
  UValidatorComponent,
} from 'unicef-material-ui'

const options = [
  {
    id: 1,
    title: 'Juan Merlos Tevar',
    subtitle: 'Manager',
    avatar: null,
  },
  {
    id: 2,
    title: 'Suresh Sevarthi',
    subtitle: 'Front-end Developer',
    avatar: null,
  },
  {
    id: 3,
    title: 'Kundal Singh Mehra',
    subtitle: 'Back-end Developer',
    avatar: (
      <Avatar
        src={
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }
      />
    ),
  },
  {
    id: 4,
    title: 'Gia Zarina Santos',
    subtitle: 'Manager',
    avatar: (
      <Avatar
        src={
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }
      />
    ),
  },
  {
    id: 5,
    title: 'Cory Kleinschmidt',
    subtitle: 'Information technology specialist',
    avatar: (
      <Avatar
        src={
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }
      />
    ),
  },
  {
    id: 6,
    title: 'Riddhi Poladia',
    subtitle: 'Database Specialist',
    avatar: (
      <Avatar
        src={
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }
      />
    ),
  },
  {
    id: 7,
    title: 'Mahananda Talgaonkar',
    subtitle: 'Sharepoint Developer',
    avatar: (
      <Avatar
        src={
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }
      />
    ),
  },
  {
    id: 8,
    title: 'Mary Anne Alde',
    subtitle: 'Sharepoint analyst',
    avatar: (
      <Avatar
        src={
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }
      />
    ),
  },
  {
    id: 9,
    title: 'Renga Narayanan',
    subtitle: 'Back-end Developer',
    avatar: (
      <Avatar
        src={
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }
      />
    ),
  },
].map(option => ({
  value: option.id,
  label: option.title,
  subtitle: option.subtitle,
  avatar: option.avatar,
}))

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    minWidth: 195,
    marginTop: theme.spacing(4),
  },
  margin: {
    marginTop: theme.spacing(4),
  },
  positiveInteger: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(5),
  },
}))

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

export default function FormValidator() {
  const classes = useStyles()

  const [values, setValues] = useState({
    currency: '',
    email: 'test@test.com',
    password: 'testinghere',
    positiveInteger: 1,
    react: false,
    angular: false,
    azure: false,
    redux: false,
    choice: null,
  })

  function handleValue(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({ ...values, [name]: value })
  }

  const [isLoading, setLoading] = useState(true)
  const [gotOptions, setOptions] = useState([''])

  const [itemValue, setItemValue] = useState('')
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setOptions(options)
      setLoading(false)
    }, 500)
    return () => clearTimeout()
  }, [])

  const { react, angular, azure, redux } = values
  const valid = [react, angular, azure, redux].filter(v => v).length > 2
  const validChoose = values.choice === null ? false : true

  function handleSubmit() {
    // Submit the changes from here
  }

  function handleItemValueChange(event) {
    setItemValue(event.target.value)
  }
  function handleItemValueSubmit() {
    setItemList([...itemList, ...[itemValue]])
    setItemValue('')
  }

  useEffect(() => {
    // returned function will be called on component unmount
    UValidatorForm.addValidationRule('isTruthy', value => {
      return value
    })
  }, [])

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" style={{ margin: '16px 0px' }}>
            People picker
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <UPeoplePicker
            label="Select"
            isLoading={isLoading}
            placeholder="Select people ..."
            options={gotOptions}
            // onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <UPeoplePicker
            label="Multi Select"
            TextFieldProps={{
              helperText: 'Please select multiple people from list',
            }}
            isLoading={isLoading}
            placeholder="Select people ..."
            options={gotOptions}
            // onChange={handleChange}
            isMulti
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" style={{ margin: '16px 0px' }}>
            Positive Integer
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <UValidatorForm
            onSubmit={event => {
              event.preventDefault()
              handleSubmit()
            }}
            onError={errors => console.log(errors)}
            instantValidate={true}
          >
            <UPositiveInteger
              value={values['positiveInteger']}
              label="Positive number"
              className={classes.positiveInteger}
              validators={['required']}
              onChange={e =>
                setValues({ ...values, positiveInteger: e.target.value })
              }
            />
          </UValidatorForm>
        </Grid>
      </Grid>
      <UValidatorForm
        onSubmit={handleSubmit}
        onError={errors => console.log(errors)}
        instantValidate={true}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography style={{ marginBottom: 12 }} variant="h5">
              Form validator
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} xl={2}>
            <UTextField
              label="Email"
              onChange={handleValue}
              className={classes.margin}
              name="email"
              variant="outlined"
              validators={['required', 'isEmail']}
              value={values.email}
            />
          </Grid>
          <Grid item xs={12} lg={3} xl={2}>
            <UTextField
              label="Password"
              onChange={handleValue}
              className={classes.margin}
              name="password"
              type="password"
              variant="outlined"
              validators={['required']}
              value={values.password}
            />
          </Grid>
          <Grid item xs={12} lg={3} xl={2}>
            <UTextField
              id="outlined-select-currency"
              select
              label="Currency"
              value={values.currency}
              onChange={handleValue}
              className={classes.textField}
              name="currency"
              validators={['required']}
              variant="outlined"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </UTextField>
          </Grid>
          <Grid item xs={12} lg={1}>
            <Button
              // style={{ marginTop: 24 }}
              className={classes.button}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </UValidatorForm>

      {/* Reset values */}
      <UValidatorForm
        onSubmit={handleItemValueSubmit}
        onError={errors => console.log(errors)}
        // debounceTime={1000}
        instantValidate={true}
      >
        <Typography variant="h5" style={{ margin: '16px 0px' }}>
          Add to list
        </Typography>
        <List>
          {itemList.map(item => (
            <ListItem>{item}</ListItem>
          ))}
        </List>
        <UTextField
          label="Item to add"
          onChange={handleItemValueChange}
          className={classes.margin}
          name="item"
          variant="outlined"
          validators={['required']}
          value={itemValue}
        />
        <Button
          className={classes.margin}
          color="primary"
          variant="contained"
          type="submit"
        >
          Validate
        </Button>
      </UValidatorForm>
      {/* Custom controls validation*/}
      <UValidatorForm
        onBlur={handleSubmit}
        onSubmit={handleSubmit}
        onError={errors => console.log(errors)}
        // debounceTime={1000}
        instantValidate={true}
      >
        <Box display="flex" mb={2} flexDirection="column" alignItems="baseline">
          <UValidatorComponent
            name="termAndCondition"
            label="Agree with the Terms and Conditions"
            validators={['isTruthy']}
            customErrorMessages={{ isTruthy: 'check more than two fields' }}
            value={valid}
          >
            <FormControl
              className={classes.margin}
              required
              component="fieldset"
            >
              <FormLabel>Pick more than two</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="react"
                      label="React"
                      color="primary"
                      checked={values.react}
                      value={values.react}
                      onChange={handleValue}
                    />
                  }
                  label="React Facebook"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="redux"
                      label="Redux"
                      color="secondary"
                      checked={values.redux}
                      value={values.redux}
                      onChange={handleValue}
                    />
                  }
                  label="Redux"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="angular"
                      label="Angular"
                      color="default"
                      checked={values.angular}
                      value={values.angular}
                      onChange={handleValue}
                    />
                  }
                  label="Angular Google"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="azure"
                      label="Azure"
                      color="primary"
                      checked={values.azure}
                      value={values.azure}
                      onChange={handleValue}
                    />
                  }
                  label="Azure Microsoft"
                />
              </FormGroup>
            </FormControl>
          </UValidatorComponent>
          <UValidatorComponent
            name="radio"
            label="Choose an option"
            validators={['isTruthy']}
            customErrorMessages={{ isTruthy: 'choose an option from above' }}
            value={validChoose}
          >
            <FormControl
              className={classes.margin}
              required
              component="fieldset"
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                row
                name="gender2"
                value={values.choice}
                onChange={handleValue}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio color="primary" />}
                  label="Other"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </UValidatorComponent>
          <Button
            className={classes.margin}
            color="primary"
            variant="contained"
            type="submit"
          >
            Validate
          </Button>
        </Box>
      </UValidatorForm>
    </React.Fragment>
  )
}
