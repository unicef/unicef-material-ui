import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { UValidatorForm, UValidatorComponent } from 'unicef-material-ui'

const useStyles = makeStyles(theme => ({
  input: {
    backgroundColor: 'inherit',
    height: '100%',
    outline: 'none',
    border: '1px solid transparent',
    textOverflow: 'ellipsis',
    ...theme.typography.div,
    padding: 4,
    width: '100%',
    '&:hover': {
      border: '1px solid',
      borderColor: 'grey',
    },
    '&:focus': {
      border: '1px solid',
      borderColor: 'blue',
    },
  },
  hoverInput: {
    width: '40%'
  },
  label: {
    paddingLeft: 4,
    color: 'grey',
    fontSize: 14,
  }
}))

export default function FormInput(props) {

  const form = useRef('form')
  const classes = useStyles()
  const [value, setValue] = useState(null)

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleSubmit() {
    //submit
  }

  return (
    <UValidatorForm
      ref={form}
      onSubmit={handleSubmit}
      onError={errors => console.log(errors)}
      debounceTime={300}
    // instantValidate={true}
    >
      <UValidatorComponent
        validators={['required', 'isNumber']}
        errorMessages={['this field is required', 'value must be number']}
        value={value}
      >
        <div className={classes.hoverInput}>
          <label className={classes.label} >Task effort</label>
          <input defautype="text" className={classes.input} classes={{ focused: classes.hoverInput }} onChange={handleChange} />
        </div>
      </UValidatorComponent>
      <Button color="primary" variant="contained" type="Validate">Validate</Button>
    </UValidatorForm>
  )
}