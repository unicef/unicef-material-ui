import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, Checkbox, MenuItem, Radio, FormGroup, FormControl, FormLabel, FormControlLabel, RadioGroup, FormHelperText } from '@material-ui/core'
import { SelectValidator, ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import CheckboxValidatorElement from './Checkbox'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(1),
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
    marginLeft: theme.spacing(1),
  },
  menu: {
    minWidth: 191,
  },
}))

const currencies = [
  {
    value: '',
    label: '',
  },
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

  const form = useRef('form')

  const classes = useStyles()

  const [values, setValues] = useState(
    {
      email: '',
      password: '',
      react: false,
      angular: false,
      azure: false,
      redux: false,
      currecy: '',
      toggle: false,
    }
  )

  const [valueChoice, setValueChoice] = React.useState(null);

  function handleChange(event) {
    setValueChoice(event.target.value);
  }

  function handleValue(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({ ...values, [name]: value })
  }
  const { react, angular, azure, redux } = values;
  const valid = [react, angular, azure, redux].filter(v => v).length > 2;
  const validChoose = valueChoice === null ? false : true;

  function handleSubmit() {
    // Submit the changes from here
  }
  useEffect(() => {
    // returned function will be called on component unmount 
    ValidatorForm.addValidationRule('isTruthy', (value) => { return value })
  }, [])

  return (
    <React.Fragment>
      <ValidatorForm
        ref={form}
        onSubmit={handleSubmit}
        onError={errors => console.log(errors)}
        debounceTime={1000}
      // instantValidate={true}
      >
        <Box display="flex" alignItems="baseline">
          <TextValidator
            label="Email"
            onChange={handleValue}
            name="email"
            variant="outlined"
            className={classes.textField}
            value={values.email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
          <TextValidator
            label="Password"
            onChange={handleValue}
            name="password"
            type="password"
            variant="outlined"
            className={classes.textField}
            validators={['required']}
            value={values.password}
            errorMessages={['this field is required']}
          />
          <SelectValidator
            id="outlined-select-currency"
            select
            label="Currency"
            className={classes.textField}
            value={values.currency}
            onChange={handleValue}
            name="currency"
            value={values.currency}
            validators={['required']}
            errorMessages={['this field is required']}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </SelectValidator>
          <Button className={classes.margin} color="primary" variant="contained" type="submit">Submit</Button>
        </Box>
      </ValidatorForm>
      <ValidatorForm
        ref={form}
        onBlur={handleSubmit}
        onError={errors => console.log(errors)}
        // debounceTime={1000}
        instantValidate={true}
      >
        <Box display="flex" flexDirection="column" alignItems="baseline">
          <CheckboxValidatorElement
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
          </CheckboxValidatorElement>
          <CheckboxValidatorElement
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
          </CheckboxValidatorElement>
          <Button className={classes.margin} color="primary" variant="contained" type="Validate">Validate</Button>
        </Box>
      </ValidatorForm>
    </React.Fragment >
  )
}