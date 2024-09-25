import React, { useState, useEffect, useRef } from 'react'
import { styled } from '@mui/material/styles'
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
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import {
  UTextField,
  UPositiveInteger,
  UCurrencyField,
  UValidatorForm,
  UValidatorComponent,
  UCoordinateField,
} from 'unicef-material-ui'

const PREFIX = 'FormValidator'

const classes = {
  container: `${PREFIX}-container`,
  textField: `${PREFIX}-textField`,
  margin: `${PREFIX}-margin`,
  mb3: `${PREFIX}-mb3`,
  button: `${PREFIX}-button`,
  label: `${PREFIX}-label`,
}

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.container}`]: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  [`& .${classes.textField}`]: {
    minWidth: 195,
    marginTop: theme.spacing(4),
  },

  [`& .${classes.margin}`]: {
    marginTop: theme.spacing(4),
  },

  [`& .${classes.mb3}`]: {
    marginBottom: theme.spacing(3),
  },

  [`& .${classes.button}`]: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(2),
  },

  [`& .${classes.label}`]: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
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
  let form = useRef('form')
  const [values, setValues] = useState({
    currency: '',
    email: 'test@test.com',
    regex: '',
    password: 'testinghere',
    positiveInteger: 1,
    currencyField: 1000.55,
    counter: 'This is counter',
    react: false,
    angular: false,
    azure: false,
    redux: false,
    choice: null,
    cus_email: '',
  })

  function handleValue(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({ ...values, [name]: value })
  }

  const handleBlur = event => {
    console.log('handleBlur', event)
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
    <Root>
      <Grid container spacing={1}>
        <Grid item size={12}>
          <Typography variant="h5" style={{ margin: '16px 0px' }}>
            Positive Integer
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <UValidatorForm
            onSubmit={event => {
              event.preventDefault()
              handleSubmit()
            }}
            onError={errors => console.log(errors)}
            instantValidate={true}
            noValidate
          >
            <UPositiveInteger
              name="PositiveNumber"
              value={values['positiveInteger']}
              label="Positive number"
              validators={['required']}
              onChange={e =>
                setValues({ ...values, positiveInteger: e.target.value })
              }
              onBlur={handleBlur}
            />
          </UValidatorForm>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item size={12}>
          <Typography variant="h5" style={{ margin: '16px 0px' }}>
            Currency field
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <UValidatorForm
            onSubmit={event => {
              event.preventDefault()
              handleSubmit()
            }}
            onError={errors => console.log(errors)}
            instantValidate={true}
            noValidate
          >
            <UCurrencyField
              name="CurrencyInput"
              value={values['currencyField']}
              label="currency input"
              className={classes.mb3}
              validators={['required']}
              onChange={e =>
                setValues({ ...values, currencyField: e.target.value })
              }
              prefix="$"
            />
          </UValidatorForm>
        </Grid>
      </Grid>
      <UValidatorForm
        onSubmit={handleSubmit}
        ref={form}
        onError={errors => console.log(errors)}
        instantValidate={true}
        noValidate
      >
        <Grid container>
          <Grid item size={12}>
            <Typography style={{ marginBottom: 12 }} variant="h5">
              Reset Form validator
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, lg: 3, xl: 2 }}>
            <UTextField
              label="Email"
              required
              showLabelHelp={true}
              InputLabelHelpProps={{
                tooltipTitle: 'Hover text',
              }}
              onChange={handleValue}
              className={classes.margin}
              name="cus_email"
              validators={['required', 'isEmail']}
              value={values.cus_email}
            />
          </Grid>
          <Grid item size={{ xs: 12, lg: 6 }}>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
            <Button
              onClick={resetValidation}
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
        noValidate
      >
        <Grid container>
          <Grid item size={12}>
            <Typography style={{ marginBottom: 12 }} variant="h5">
              Form validator
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, lg: 3, xl: 2 }}>
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
          <Grid item size={{ xs: 12, lg: 3, xl: 2 }}>
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
          <Grid item size={{ xs: 12, lg: 3, xl: 2 }}>
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
          <Grid item size={{ xs: 12, lg: 3, xl: 2 }}>
            <UTextField
              label="URL"
              onChange={handleValue}
              className={classes.margin}
              name="url"
              variant="outlined"
              validators={['required', 'isUrl']}
              value={values.url}
            />
          </Grid>
          <Grid item size={{ xs: 12, lg: 3, xl: 2 }}>
            <UTextField
              label="Phone"
              onChange={handleValue}
              className={classes.margin}
              name="phone"
              variant="outlined"
              validators={['required', 'isPhone']}
              value={values.phone}
            />
          </Grid>
          <Grid item size={{ xs: 12, lg: 3, xl: 2 }}>
            <UTextField
              label="Safe text"
              onChange={handleValue}
              className={classes.margin}
              name="safeText"
              variant="outlined"
              validators={['required', 'isSafeText']}
              value={values.safeText}
            />
          </Grid>
          <Grid item size={{ xs: 12, lg: 3, xl: 2 }}>
            <UTextField
              label="Custom regex(no script)"
              onChange={handleValue}
              className={classes.margin}
              name="regex"
              variant="outlined"
              validators={[
                'matchRegexpCaseInSensitive:^(?!.*<script\\b[^>]*>.*<\\/script\\s*>).*$',
              ]}
              value={values.regex}
              customErrorMessages={{
                'matchRegexpCaseInSensitive:^(?!.*<script\\b[^>]*>.*<\\/script\\s*>).*$':
                  'Invalid data',
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, lg: 3, xl: 2 }}>
            <UTextField
              label="Alphanumeric"
              onChange={handleValue}
              className={classes.margin}
              name="alphanumeric"
              variant="outlined"
              validators={['required', 'isAlphanumeric']}
              value={values.alphanumeric}
            />
          </Grid>
          <Grid item size={{ xs: 12, lg: 1 }}>
            <Button
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
        instantValidate={true}
        noValidate
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
        instantValidate={true}
        noValidate
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
        instantValidate={true}
        noValidate
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

      <UValidatorForm
        onSubmit={handleItemValueSubmit}
        onError={errors => console.log(errors)}
        instantValidate={true}
        noValidate
      >
        <Grid container spacing={1}>
          <Grid item size={12}>
            <Typography variant="h5" style={{ margin: '16px 0px' }}>
              Coordinates Form
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, lg: 3, xl: 3 }}>
            <UCoordinateField
              coordinateType="latitude"
              label="Latitude"
              name="latitude"
              value={values.latitude}
              fullWidth
              onChange={handleValue}
              validators={['required']}
            />
          </Grid>

          <Grid item size={{ xs: 12, lg: 3, xl: 3 }}>
            <UCoordinateField
              coordinateType="longitude"
              label="Longitude"
              name="longitude"
              value={values.longitude}
              fullWidth
              onChange={handleValue}
              validators={['required']}
            />
          </Grid>

          <Grid item size={12}>
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </UValidatorForm>
    </Root>
  )
}
