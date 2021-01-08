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
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import {
  UTextField,
  UPositiveInteger,
  UValidatorForm,
  UValidatorComponent,
} from 'unicef-material-ui'

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
    marginLeft: theme.spacing(2),
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
  let form = useRef('form')
  const [values, setValues] = useState({
    currency: '',
    email: 'test@test.com',
    password: 'testinghere',
    positiveInteger: 1,
    counter: 'This is counter',
    react: false,
    angular: false,
    azure: false,
    redux: false,
    choice: null,
    cus_email: ''
  })

  function handleValue(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({ ...values, [name]: value })
  }

  const [itemValue, setItemValue] = useState('')
  const [itemList, setItemList] = useState([])

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

  function resetValidation() {
    form.current.resetValidations()
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
              name="PositiveNumber"
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
        ref={form}
        onError={errors => console.log(errors)}
        instantValidate={true}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography style={{ marginBottom: 12 }} variant="h5">
              Reset Form validator
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} xl={2}>
            <UTextField
              label="Email"
              onChange={handleValue}
              className={classes.margin}
              name="cus_email"
              variant="outlined"
              validators={['required', 'isEmail']}
              value={values.cus_email}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Button
              // style={{ marginTop: 24 }}
              className={classes.button}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
            <Button
              onClick={resetValidation}
              // style={{ marginTop: 24 }}
              className={classes.button}
              color="primary"
              variant="contained"
              type="button"
            >
              Reset Validation
            </Button>
          </Grid>
        </Grid>
      </UValidatorForm>
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
      <UValidatorForm
        onSubmit={handleItemValueSubmit}
        onError={errors => console.log(errors)}
        // debounceTime={1000}
        instantValidate={true}
      >
        <Typography variant="h5" style={{ margin: '16px 0px' }}>
          TextField with counter
        </Typography>
        <UTextField
          label="Counter"
          name="counter"
          value={values.counter}
          onChange={handleValue}
          className={classes.margin}
          variant="outlined"
          validators={['required']}
          counter
          maxLength={16}
          withRequiredValidator={false}
        />
      </UValidatorForm>
      {/* Reset values */}

      <UValidatorForm
        onSubmit={handleItemValueSubmit}
        onError={errors => console.log(errors)}
        // debounceTime={1000}
        instantValidate={true}
      >
        <Typography variant="h5" style={{ margin: '16px 0px' }}>
          Reset form
        </Typography>
        <List>
          {itemList.map((item, i) => (
            <ListItem key={i}>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
        <UTextField
          label="Item to add*"
          onChange={handleItemValueChange}
          className={classes.margin}
          name="item"
          variant="outlined"
          validators={['required']}
          value={itemValue}
          withRequiredValidator={false}
        />
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
        >
          Add
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
                name="choice"
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