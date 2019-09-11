import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';

export default function UTextField() {
  const [value, setValue] = useState('')
  const [errorText, setErrorText] = useState(false)

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit() {
    if (value === '') {
      setErrorText('is Required')
    }
  }

  return (
    <form>
      <TextField
        helperText={errorText}
        error={errorText}
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <Button title="Submit" color="primary" variant="contained" onClick={handleSubmit} >
        Submit
      </Button>
    </form>
  );
}