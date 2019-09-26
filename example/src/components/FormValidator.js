import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Box, Checkbox, MenuItem, Radio, FormGroup, FormControl, FormLabel, FormControlLabel, RadioGroup, Grid } from '@material-ui/core'
import { UValidatorForm, UValidatorComponent } from 'unicef-material-ui'
import ActiveFormTextField from './ActiveFormTextField'
import ActiveFormSelect from './ActiveFormSelect';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 195,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menu: {
    minWidth: 191,
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
  const [values, setValues] = useState(
    {
      email: '',
      password: ''
    }
  )

  function handleValue(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({ ...values, [name]: value })
  }

  const [valueChoice, setValueChoice] = React.useState(null)

  function handleChange(event) {
    setValueChoice(event.target.value);
  }

  const { react, angular, azure, redux } = values;
  const valid = [react, angular, azure, redux].filter(v => v).length > 2;
  const validChoose = valueChoice === null ? false : true;

  function handleSubmit() {
    // Submit the changes from here
  }

  useEffect(() => {
    // returned function will be called on component unmount 
    UValidatorForm.addValidationRule('isTruthy', (value) => { return value })
  }, [])

  return (
    <React.Fragment>
      <Typography variant="h5" >
        Form validator
      </Typography>
      <UValidatorForm
        ref={form}
        onSubmit={handleSubmit}
        onError={errors => console.log(errors)}
        debounceTime={1000}
      // instantValidate={true}
      >
        <Grid container direction="row" alignItems="center">
          <Grid item sm={12} lg={3} xl={2} >
            <ActiveFormTextField
              label="Email"
              onChange={handleValue}
              className={classes.margin}
              name="email"
              value={values.email}
              typographyVariant='div'
              variant="outlined"
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />
          </Grid>
          <Grid item sm={12} lg={3} xl={2}>
            <ActiveFormTextField
              label="Password"
              onChange={handleValue}
              className={classes.margin}
              name="password"
              type="password"
              variant="outlined"
              validators={['required']}
              typographyVariant='div'
              value={values.password}
              errorMessages={['this field is required']}
            />
          </Grid>
          <Grid item sm={12} lg={3} xl={2}>
            <ActiveFormSelect
              id="outlined-select-currency"
              select
              label="Currency"
              value={values.currency}
              onChange={handleValue}
              className={classes.textField}
              typographyVariant='div'
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
            </ActiveFormSelect>
          </Grid>
          <Grid item sm={12} lg={1}>
            <Button className={classes.margin} color="primary" variant="contained" type="submit">Submit</Button>
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
            <FormControl className={classes.margin} required component="fieldset" >
              <FormLabel >Pick more than two</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox
                    name="react"
                    label="React"
                    color="primary"
                    checked={values.react}
                    value={values.react}
                    onChange={handleValue}
                  />}
                  label="React Facebook"
                />
                <FormControlLabel
                  control={<Checkbox
                    name="redux"
                    label="Redux"
                    color="secondary"
                    checked={values.redux}
                    value={values.redux}
                    onChange={handleValue}
                  />}
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
                    />}
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
                    />}
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
            <FormControl className={classes.margin} required component="fieldset" >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" row name="gender2" value={valueChoice} onChange={handleChange}>
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
          <Button className={classes.margin} color="primary" variant="contained" type="Validate">Validate</Button>
        </Box>
      </UValidatorForm>
    </React.Fragment >
  )
}