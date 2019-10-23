import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Grid,
  Avatar,
  Divider,
  Box,
  FormControlLabel,
  Switch,
  MenuItem,
  Button,
  Typography,
} from '@material-ui/core'
import { ActiveFormTextField, UValidatorForm } from 'unicef-material-ui'
import ActiveFormSelect from './ActiveFormSelect'

const useStyles = makeStyles(theme => ({
  textfield: {
    minWidth: 193,
  },
  margin: {
    margin: theme.spacing(2)
  },
  input: {
    borderRadius: 0,
  },
  avatar: {
    height: 160,
    width: 160,
    marginLeft: theme.spacing(3),
  }
}))

export default function InteractiveViews() {
  const classes = useStyles()
  const form = useRef('form')
  const [readOnly, setReadOnly] = useState(false)
  const [hideBorder, setHideBorder] = useState(false)

  function handleChange() {

    setReadOnly(!readOnly)
  }

  const [disabled, setDisabled] = useState(true)
  const [values, setValues] = useState(
    {
      name: 'John Doe',
      email: 'john@john.com',
      employment: 1,
      mobile: 2223333433,
      address: '9452 Horace New York NY 11224',
    }
  )

  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    }
  }, [])

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

  function handleBorder() {
    timer.current = setTimeout(() => {
      setHideBorder(true);
    }, 200);
  }

  function handleSubmit() {
    console.log(hideBorder)
    setHideBorder(false)
    setDisabled(true)
  }

  return (
    <Grid container spacing={3} display="flex" >
      <Grid item xs={12} lg={8}>
        <Paper style={{ padding: 8 }}>
          <UValidatorForm>
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
              Active views allow user to see and edit current page at the same time
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
              <Switch checked={readOnly} onChange={handleChange} value={readOnly} />
            }
            label="ReadOnly"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Typography variant="h3">Validation</Typography>
        <Typography style={{ margin: 8 }} variant="subtitle1"> Data can be validated and contains labels</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper style={{ padding: 8 }}>
          <UValidatorForm
            ref={form}
            onSubmit={handleSubmit}
            debounceTime={1000}
          >
            <Grid item container spacing={2} >
              <Grid item xs={12}>
                <Box display="flex" alignItems="center" >
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
              <Grid item container spacing={2} >
                <Grid item xs={12} lg={3}>
                  <Avatar alt="profile image" className={classes.avatar} src="" />
                </Grid>
                <Grid item container spacing={2} xs={12} lg={9}>
                  <Grid item xs={12}>
                    <ActiveFormTextField
                      label="Name"
                      name="name"
                      placeholder="Enter your name"
                      onChange={handleValue}
                      typographyVariant="h4"
                      value={values.name}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ActiveFormTextField
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleValue}
                      typographyVariant="subtitle1"
                      value={values.email}
                      validators={['required', 'isEmail']}
                      errorMessages={['this field is required', 'email is not valid']}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ActiveFormSelect
                      label="Employment"
                      name="employment"
                      value={values.employment}
                      onChange={handleValue}
                      className={classes.textfield}
                      typographyVariant="subtitle1"
                      validators={['required']}
                      errorMessages={['this field is required']}
                    >
                      <MenuItem key="student" value={1}>
                        Student
                      </MenuItem>
                      <MenuItem key="employed" value={2}>
                        Employed
                      </MenuItem>
                      <MenuItem key="unemployed" value={3}>
                        Unemployed
                      </MenuItem>
                    </ActiveFormSelect>
                  </Grid>
                  <Grid item xs={12}>
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
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </UValidatorForm>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper style={{ padding: 8 }}>
          <UValidatorForm
            ref={form}
            onSubmit={handleSubmit}
            debounceTime={1000}
          >
            <Grid item container spacing={2} >
              <Grid item xs={12}>
                <Box display="flex" alignItems="center" >
                  <ActiveFormTextField
                    typographyVariant="h3"
                    fullWidth
                    multiline
                    readOnly
                  >
                    Personnel Details
                  </ActiveFormTextField>
                  {hideBorder ? <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Save
                  </Button>
                    :
                    <Button
                      variant="contained"
                      color="default"
                      onClick={handleBorder}
                    >
                      Edit
                  </Button>
                  }
                </Box>
                <Divider />
              </Grid>
              <Grid item container spacing={2} >
                <Grid item xs={12} lg={3}>
                  <Avatar alt="profile image" className={classes.avatar} src="" />
                </Grid>
                <Grid item container spacing={2} xs={12} lg={9}>
                  <Grid item xs={12}>
                    <ActiveFormTextField
                      label="Name"
                      name="name"
                      placeholder="Enter your name"
                      onChange={handleValue}
                      hideBorder={hideBorder}
                      typographyVariant="h4"
                      value={values.name}
                      readOnly={!hideBorder}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ActiveFormTextField
                      label="Email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleValue}
                      hideBorder={hideBorder}
                      typographyVariant="subtitle1"
                      value={values.email}
                      readOnly={!hideBorder}
                      validators={['required', 'isEmail']}
                      errorMessages={['this field is required', 'email is not valid']}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ActiveFormSelect
                      label="Employment"
                      name="employment"
                      value={values.employment}
                      onChange={handleValue}
                      hideBorder={hideBorder}
                      className={classes.textfield}
                      readOnly={!hideBorder}
                      typographyVariant="subtitle1"
                      validators={['required']}
                      errorMessages={['this field is required']}
                    >
                      <MenuItem key="student" value={1}>
                        Student
                      </MenuItem>
                      <MenuItem key="employed" value={2}>
                        Employed
                      </MenuItem>
                      <MenuItem key="unemployed" value={3}>
                        Unemployed
                      </MenuItem>
                    </ActiveFormSelect>
                  </Grid>
                  <Grid item xs={12}>
                    <ActiveFormTextField
                      label="Address"
                      name="address"
                      onChange={handleValue}
                      hideBorder={hideBorder}
                      typographyVariant="subtitle1"
                      value={values.address}
                      readOnly={!hideBorder}
                      validators={['required']}
                      errorMessages={['this field is required']}
                      fullWidth
                      multiline
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </UValidatorForm>
        </Paper>
      </Grid>
    </Grid >
  )
}