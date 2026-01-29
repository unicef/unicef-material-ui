import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Paper,
  Grid,
  Avatar,
  Divider,
  Box,
  FormControlLabel,
  Switch,
  Button,
  Typography,
} from '@mui/material'
import {
  ActiveFormTextField,
  ActiveCurrencyField,
  ActiveFormSelect,
  UValidatorForm,
  ActiveDatePicker,
  USelectPicker,
} from '@unicef/material-ui'

const PREFIX = 'InteractiveViews'

const classes = {
  textfield: `${PREFIX}-textfield`,
  margin: `${PREFIX}-margin`,
  input: `${PREFIX}-input`,
  avatar: `${PREFIX}-avatar`,
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.textfield}`]: {
    minWidth: 193,
  },

  [`& .${classes.margin}`]: {
    margin: theme.spacing(2),
  },

  [`& .${classes.input}`]: {
    borderRadius: 0,
  },

  [`& .${classes.avatar}`]: {
    height: 160,
    width: 160,
  },
}))

export default function InteractiveViews() {
  const [readOnly, setReadOnly] = useState(true)

  function handleChange() {
    setReadOnly(!readOnly)
  }

  const [disabled, setDisabled] = useState(true)
  const [values, setValues] = useState({
    name: 'John Doe',
    email: 'john@john.com',
    employment: 'student',
    mobile: 2223333433,
    address: '9452 Horace New York NY 11224',
    salary: 100.55,
    dateOfBirth: new Date(),
    skills: [
      {
        label: 'HTML',
        value: 'HTML',
      },
      {
        label: 'CSS',
        value: 'CSS',
      },
    ],
  })
  const timer = React.useRef()

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const skillsOptions = [
    {
      label: 'HTML',
      value: 'HTML',
    },
    {
      label: 'CSS',
      value: 'CSS',
    },
    {
      label: 'Javascript',
      value: 'Javascript',
    },
    {
      label: 'React Js',
      value: 'React Js',
    },
  ]

  const employmentOptions = [
    {
      label: 'Student',
      value: 'student',
    },
    {
      label: 'Employed',
      value: 'employed',
    },
    {
      label: 'Unemployed',
      value: 'unemployed',
    },
  ]

  function handleValue(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const newValues = { ...values, [name]: value }
    if (values !== newValues) {
      setDisabled(false)
      setValues(newValues)
    }
  }
  function handleDateValue(date) {
    const newValues = { ...values, dateOfBirth: date }
    if (values !== newValues) {
      setDisabled(false)
      setValues(newValues)
    }
  }

  function handleSkillsChange(value, action) {
    setValues({ ...values, [action.name]: value })
  }
  function handleEdit() {
    timer.current = setTimeout(() => {
      setReadOnly(false)
    }, 200)
  }

  function handleSubmit() {
    setReadOnly(true)
    setDisabled(true)
  }

  return (
    <StyledGrid container spacing={3} display="flex">
      <Grid size={{ xs: 12, lg: 8 }}>
        <Paper sx={{ padding: 1 }}>
          <UValidatorForm onSubmit={() => {}}>
            <ActiveFormTextField
              readOnly={readOnly}
              typographyVariant="h2"
              variant="outlined"
              fullWidth
              // multiline
            >
              Interactive Views
            </ActiveFormTextField>
            <ActiveFormTextField
              readOnly={readOnly}
              typographyVariant="subtitle1"
              variant="outlined"
              fullWidth
              multiline
            >
              Active views allow user to see and edit current page at the same
              time
            </ActiveFormTextField>
            <ActiveFormTextField
              readOnly={readOnly}
              typographyVariant="h3"
              variant="outlined"
              fullWidth
              multiline
            >
              Read Only
            </ActiveFormTextField>
            <ActiveFormTextField
              readOnly={readOnly}
              typographyVariant="subtitle1"
              variant="outlined"
              fullWidth
              multiline
            >
              If an active view is read only mode, user can no longer edit
            </ActiveFormTextField>
          </UValidatorForm>
          <FormControlLabel
            control={
              <Switch
                checked={readOnly}
                onChange={handleChange}
                value={readOnly}
              />
            }
            label="ReadOnly"
          />
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, lg: 8 }}>
        <Typography variant="h3">Validation</Typography>
        <Typography sx={{ margin: 1 }} variant="subtitle1">
          {' '}
          Data can be validated and contains labels
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Paper sx={{ padding: 1 }}>
          <UValidatorForm onSubmit={handleSubmit} debounceTime={1000}>
            <Grid container spacing={2}>
              <Grid size={12}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <ActiveFormTextField
                    typographyVariant="h3"
                    fullWidth
                    multiline
                    readOnly
                  >
                    Personnel Details
                  </ActiveFormTextField>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={disabled}
                  >
                    Save
                  </Button>
                </Box>
                <Divider />
              </Grid>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, lg: 3 }}>
                  <Avatar
                    alt="profile image"
                    className={classes.avatar}
                    src=""
                  />
                </Grid>
                <Grid container spacing={2} size={{ xs: 12, lg: 9 }}>
                  <Grid size={12}>
                    <ActiveFormTextField
                      label="Name"
                      name="name"
                      placeholder="Enter your name"
                      onChange={handleValue}
                      typographyVariant="h4"
                      value={values.name}
                      validators={['required']}
                      errorMessages={['this field is required']}
                      interactiveMode
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <ActiveFormTextField
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleValue}
                      typographyVariant="subtitle1"
                      value={values.email}
                      validators={['required', 'isEmail']}
                      errorMessages={[
                        'this field is required',
                        'email is not valid',
                      ]}
                      interactiveMode
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <ActiveFormSelect
                      label="Employment"
                      name="employment"
                      value={values.employment}
                      onChange={handleValue}
                      className={classes.textfield}
                      typographyVariant="subtitle1"
                      validators={['required']}
                      errorMessages={['this field is required']}
                      interactiveMode
                      options={employmentOptions}
                    />
                  </Grid>
                  <Grid size={12}>
                    <ActiveCurrencyField
                      label="Salary"
                      name="salary"
                      onChange={handleValue}
                      typographyVariant="subtitle1"
                      value={values.salary}
                      validators={['required']}
                      errorMessages={['this field is required']}
                      fullWidth
                      multiline
                      interactiveMode
                    />
                  </Grid>
                  <Grid size={12}>
                    <ActiveFormTextField
                      label="Address"
                      name="address"
                      onChange={handleValue}
                      typographyVariant="subtitle1"
                      value={values.address}
                      validators={['required']}
                      errorMessages={['this field is required']}
                      fullWidth
                      multiline
                      interactiveMode
                    />
                  </Grid>
                  <Grid size={12}>
                    <ActiveDatePicker
                      label="Date of birth"
                      typographyVariant="subtitle1"
                      fullWidth
                      interactiveMode
                      name="dateOfBirth"
                      value={values.dateOfBirth}
                      onChange={handleDateValue}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </UValidatorForm>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Paper sx={{ padding: 1 }}>
          <UValidatorForm onSubmit={handleSubmit} debounceTime={1000}>
            <Grid container spacing={2}>
              <Grid size={12}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <ActiveFormTextField
                    typographyVariant="h3"
                    fullWidth
                    multiline
                    readOnly
                  >
                    Personnel Details
                  </ActiveFormTextField>
                  {readOnly ? (
                    <Button variant="contained" onClick={handleEdit}>
                      Edit
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary" type="submit">
                      Save
                    </Button>
                  )}
                </Box>
                <Divider />
              </Grid>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, lg: 3 }}>
                  <Avatar
                    alt="profile image"
                    className={classes.avatar}
                    src=""
                  />
                </Grid>
                <Grid container spacing={2} size={{ xs: 12, lg: 9 }}>
                  <Grid size={12}>
                    <ActiveFormTextField
                      label="Name"
                      name="name"
                      // placeholder="Enter your name"
                      onChange={handleValue}
                      typographyVariant="h4"
                      value={values.name}
                      readOnly={readOnly}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <ActiveFormTextField
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleValue}
                      typographyVariant="subtitle1"
                      value={values.email}
                      readOnly={readOnly}
                      validators={['required', 'isEmail']}
                      errorMessages={[
                        'this field is required',
                        'email is not valid',
                      ]}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <ActiveFormSelect
                      label="Employment"
                      name="employment"
                      value={values.employment}
                      onChange={handleValue}
                      className={classes.textfield}
                      readOnly={readOnly}
                      typographyVariant="subtitle1"
                      validators={['required']}
                      errorMessages={['this field is required']}
                      options={employmentOptions}
                    />
                  </Grid>
                  <Grid size={12}>
                    <ActiveFormTextField
                      label="Address"
                      name="address"
                      onChange={handleValue}
                      typographyVariant="subtitle1"
                      value={values.address}
                      readOnly={readOnly}
                      validators={['required']}
                      errorMessages={['this field is required']}
                      fullWidth
                      multiline
                    />
                  </Grid>
                  <Grid size={12}>
                    <ActiveCurrencyField
                      label="Salary"
                      name="salary"
                      onChange={handleValue}
                      typographyVariant="subtitle1"
                      value={values.salary}
                      readOnly={readOnly}
                      validators={['required']}
                      errorMessages={['this field is required']}
                      fullWidth
                      multiline
                    />
                  </Grid>
                  <Grid size={12}>
                    <USelectPicker
                      label="Skills"
                      name="skills"
                      value={values.skills || []}
                      onChange={handleSkillsChange}
                      options={skillsOptions}
                      variant="outlined"
                      isMulti
                      fullWidth
                      readOnly={readOnly}
                      showLabelHelp={true}
                      InputLabelHelpProps={{
                        tooltipTitle: 'Please select multiple people from list',
                      }}
                    />
                  </Grid>
                  <Grid size={12}>
                    <ActiveDatePicker
                      label="Date of birth"
                      typographyVariant="subtitle1"
                      fullWidth
                      readOnly={readOnly}
                      name="dateOfBirth"
                      value={values.dateOfBirth}
                      onChange={handleDateValue}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </UValidatorForm>
        </Paper>
      </Grid>
    </StyledGrid>
  )
}
