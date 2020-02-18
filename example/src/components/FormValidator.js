import React, { useState, useEffect, useRef } from 'react'
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
} from '@material-ui/core'
import {
  UTextField,
  UPeoplePicker,
  UValidatorForm,
  UValidatorComponent,
} from 'unicef-material-ui'

const options = [
  { id: 1, title: 'Juan Merlos Tevar', subtitle: 'Manager', imageUrl: null },
  {
    id: 2,
    title: 'Suresh Sevarthi',
    subtitle: 'Front-end Developer',
    imageUrl: null,
  },
  {
    id: 3,
    title: 'Kundal Singh Mehra',
    subtitle: 'Back-end Developer',
    imageUrl: null,
  },
  { id: 4, title: 'Gia Zarina Santos', subtitle: 'Manager', imageUrl: null },
  {
    id: 5,
    title: 'Cory Kleinschmidt',
    subtitle: 'Information technology specialist',
    imageUrl: null,
  },
  {
    id: 6,
    title: 'Riddhi Poladia',
    subtitle: 'Database Specialist',
    imageUrl: null,
  },
  {
    id: 7,
    title: 'Mahananda Talgaonkar',
    subtitle: 'Sharepoint Developer',
    imageUrl: null,
  },
  {
    id: 8,
    title: 'Mary Anne Alde',
    subtitle: 'Sharepoint analyst',
    imageUrl: null,
  },
  {
    id: 9,
    title: 'Renga Narayanan',
    subtitle: 'Back-end Developer',
    imageUrl: null,
  },
].map(option => ({
  value: option.id,
  label: option.title,
  subtitle: option.subtitle,
  imageUrl: option.imageUrl,
}))

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    minWidth: 195,
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(2),
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

  const form = useRef('form')
  const [values, setValues] = useState({
    email: 'test@test.com',
    password: 'testinghere',
  })

  function handleValue(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({ ...values, [name]: value })
  }

  const [valueChoice, setValueChoice] = React.useState(null)

  function handleChange(event) {
    setValueChoice(event.target.value)
  }

  const [isLoading, setLoading] = useState(true)
  const [gotOptions, setOptions] = useState([''])

  useEffect(() => {
    setTimeout(() => {
      setOptions(options)
      setLoading(false)
    }, 3000)
    return () => clearTimeout()
  }, [])

  const { react, angular, azure, redux } = values
  const valid = [react, angular, azure, redux].filter(v => v).length > 2
  const validChoose = valueChoice === null ? false : true

  function handleSubmit() {
    // Submit the changes from here
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
            TextFieldProps={{
              helperText: 'Select people from list',
            }}
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
      </Grid>
      <UValidatorForm
        ref={form}
        onSubmit={handleSubmit}
        onError={errors => console.log(errors)}
        debounceTime={1000}
        // instantValidate={true}
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
              value={values.email}
              variant="outlined"
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
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
              errorMessages={['this field is required']}
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
              errorMessages={['this field is required']}
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
              style={{ marginTop: 24 }}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </UValidatorForm>
      <UValidatorForm
        ref={form}
        onBlur={handleSubmit}
        onError={errors => console.log(errors)}
        // debounceTime={1000}
        instantValidate={true}
      >
        <Box display="flex" mb={2} flexDirection="column" alignItems="baseline">
          <UValidatorComponent
            name="termAndCondition"
            label="Agree with the Terms and Conditions"
            validators={['isTruthy']}
            errorMessages={['check more than two fields']}
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
            errorMessages={['choose an option from above']}
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
                value={valueChoice}
                onChange={handleChange}
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
            type="Validate"
          >
            Validate
          </Button>
        </Box>
      </UValidatorForm>
    </React.Fragment>
  )
}
