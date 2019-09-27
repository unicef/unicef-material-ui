import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  Paper,
  Grid,
  Avatar,
  Divider,
  FormControlLabel,
  Switch,
  MenuItem,
} from '@material-ui/core'
import { ActiveFormTextField, ActiveFormSelect, UValidatorForm } from 'unicef-material-ui'

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

  function handleChange() {

    setReadOnly(!readOnly)
  }

  const [values, setValues] = useState(
    {
      name: 'John Doe',
      email: 'john@john.com',
      employment: '',
      mobile: 2223333433,
      address: '',
    }
  )

  function handleValue(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    setValues({ ...values, [name]: value })
  }

  return (
    <Grid className={classes.margin} container spacing={4} >
      <Paper style={{ padding: 8 }}>
        <Grid item xs={12} >
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
          </UValidatorForm>
          <UValidatorForm>
            <ActiveFormTextField
              readOnly={readOnly}
              typographyVariant="subtitle1"
              variant="outlined"
              fullWidth
              multiline
            >
              Active views allow user to see and edit current page at the same time
            </ActiveFormTextField>
          </UValidatorForm>
        </Grid>
        <Grid item xs={12}>
          <UValidatorForm>
            <ActiveFormTextField
              readOnly={readOnly}
              typographyVariant="h3"
              variant="outlined"
              fullWidth
              multiline
            >
              Read Only
            </ActiveFormTextField>
          </UValidatorForm>
          <UValidatorForm>
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
        </Grid>
      </Paper>
      <Grid item xs={12} md={8}>
        <FormControlLabel
          control={
            <Switch checked={readOnly} onChange={handleChange} value={readOnly} />
          }
          label="ReadOnly"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Card>
          <UValidatorForm>
            <ActiveFormTextField
              defaultValue="Validation"
              typographyVariant="h3"
              variant="outlined"
              fullWidth
              multiline
            />
          </UValidatorForm>
          <UValidatorForm>
            <ActiveFormTextField
              defaultValue="Data can be validated and include labels"
              typographyVariant="subtitle1"
              variant="outlined"
              fullWidth
              multiline />
          </UValidatorForm>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card style={{ padding: 4 }}>
          <UValidatorForm
            ref={form}
            // onSubmit={handleSubmit}
            debounceTime={1000}
          >
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <ActiveFormTextField
                  typographyVariant="h3"
                  fullWidth
                  multiline
                >
                  Personnel Details
            </ActiveFormTextField>
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
                      required
                      onChange={handleValue}
                      typographyVariant="h4"
                      value={values.name}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ActiveFormTextField
                      label="Email"
                      name="email"
                      required
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
                      required
                      value={values.employment}
                      onChange={handleValue}
                      className={classes.textfield}
                      typographyVariant="subtitle1"
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
                      required
                      onChange={handleValue}
                      typographyVariant="subtitle1"
                      value={values.address}
                      fullWidth
                      multiline
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </UValidatorForm>
        </Card>
      </Grid>
    </Grid >
  )
}