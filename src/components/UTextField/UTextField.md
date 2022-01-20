### Usage

```jsx static
<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  debounceTime={1000}
  // instantValidate={true}
>
  <UTextField
    label="Email"
    onChange={handleValue}
    name="email"
    variant="outlined"
    className={classes.textField}
    value={value}
    validators={['required', 'isEmail']}
    errorMessages={['this field is required', 'email is not valid']}
  />
  <Button
    className={classes.margin}
    color="primary"
    variant="contained"
    type="submit"
  >
    Submit
  </Button>
</UValidatorForm>
```

### Examples

`Select`

```html
select={true} | select if you pass select, you must pass options options =
[{value: '', label: ''}, {value: 'USD', label: '$'}]
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, MenuItem } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
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

// export default function FormValidator() {

const form = useRef('form')
const classes = useStyles()
const [value, setValue] = useState()

function handleValue(event) {
  setValue(event.target.value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  // debounceTime={1000}
  instantValidate={true}
>
  <Box display="flex" alignItems="baseline">
    <UTextField
      select
      label="Currency"
      onChange={handleValue}
      className={classes.textField}
      name="currency"
      variant="outlined"
      value={value}
      validators={['required']}
      errorMessages={['this field is required']}
    >
      {currencies.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </UTextField>
    <Button
      className={classes.margin}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      type="submit"
    >
      Submit
    </Button>
  </Box>
</UValidatorForm>
//   )
// }
```

`Email : isEmail and required`

```html
validators={['required', 'isEmail']}
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, MenuItem } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

const classes = useStyles()

const [value, setValue] = useState()

function handleValue(event) {
  setValue(event.target.value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  debounceTime={1000}
  // instantValidate={true}
>
  <Box display="flex" alignItems="baseline">
    <UTextField
      label="Email"
      onChange={handleValue}
      name="email"
      variant="outlined"
      value={value}
      validators={['required', 'isEmail']}
      errorMessages={['this field is required', 'email is not valid']}
    />
    <Button
      className={classes.margin}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      type="submit"
    >
      Submit
    </Button>
  </Box>
</UValidatorForm>
//   )
// }
```

`URL : isUrl `

```html
validators={['isUrl']}
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, MenuItem } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'
import UButton from '../UButton'

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

const classes = useStyles()

const [value, setValue] = useState()

function handleValue(event) {
  setValue(event.target.value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  debounceTime={1000}
  // instantValidate={true}
>
  <Box display="flex" alignItems="baseline">
    <UTextField
      label="Url"
      onChange={handleValue}
      name="url"
      variant="outlined"
      value={value}
      validators={['isUrl']}
    />
    <UButton
      className={classes.margin}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      type="submit"
    >
      Submit
    </UButton>
  </Box>
</UValidatorForm>
//   )
// }
```

`Number: minNumber, maxNumber and numberOnly`

```html
validators={['isNumber', 'minNumber:0', 'maxNumber:25555']}
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, MenuItem } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

const classes = useStyles()

const [value, setValue] = useState()

function handleValue(event) {
  setValue(event.target.value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  // debounceTime={1000}
  instantValidate={true}
>
  <Box display="flex" alignItems="baseline">
    <UTextField
      label="Probability"
      onChange={handleValue}
      name="probability"
      variant="outlined"
      className={classes.textField}
      value={value}
      validators={['required', 'isNumber', 'minNumber:0', 'maxNumber:25555']}
      errorMessages={[
        'this field is required',
        'Value must be number only',
        'value must be possitive',
        'value must be less than 255',
      ]}
    />
    <Button
      className={classes.margin}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      type="submit"
    >
      Submit
    </Button>
  </Box>
</UValidatorForm>
//   )
// }
```

`Regular expression: matchRegexp`

```html
validators={['required', 'matchRegexp:^[0-9]$']}
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, MenuItem } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

const classes = useStyles()

const [value, setValue] = useState()

function handleValue(event) {
  setValue(event.target.value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  // debounceTime={1000}
  instantValidate={true}
>
  <Box display="flex" alignItems="baseline">
    <UTextField
      label="Regex"
      onChange={handleValue}
      name="regex"
      variant="outlined"
      className={classes.textField}
      value={value}
      validators={['required', 'matchRegexp:^[0-9]$']}
      errorMessages={['this field is required', 'value must be between 0 - 9']}
    />
    <Button
      className={classes.margin}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      type="submit"
    >
      Submit
    </Button>
  </Box>
</UValidatorForm>
//   )
// }
```

`Characters length: min number of characters and max number of characters`

```html
validators={['minStringLength:6', maxStringLength:12']}
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, MenuItem } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

const classes = useStyles()

const [value, setValue] = useState()

function handleValue(event) {
  setValue(event.target.value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  debounceTime={1000}
  // instantValidate={true}
>
  <Box display="flex" alignItems="baseline">
    <UTextField
      label="Characters Length"
      onChange={handleValue}
      name="characters length"
      variant="outlined"
      className={classes.textField}
      value={value}
      validators={['required', 'minStringLength:6', 'maxStringLength:12']}
      errorMessages={[
        'this field is required',
        'minimum character length is 6',
        'maximum character length is 12',
      ]}
    />
    <Button
      className={classes.margin}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      type="submit"
    >
      Submit
    </Button>
  </Box>
</UValidatorForm>
//   )
// }
```

`PHONE : isPhone`

```html
validators={['isPhone']}
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, MenuItem } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

const classes = useStyles()

const [value, setValue] = useState()

function handleValue(event) {
  setValue(event.target.value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  debounceTime={1000}
  // instantValidate={true}
>
  <Box display="flex" alignItems="baseline">
    <UTextField
      label="Phone number"
      onChange={handleValue}
      name="phoneNumber"
      variant="outlined"
      className={classes.textField}
      value={value}
      validators={['isPhone']}
    />
    <Button
      className={classes.margin}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      type="submit"
    >
      Submit
    </Button>
  </Box>
</UValidatorForm>
//   )
// }
```

`Alphanumeric : isAlphanumeric`

```html
validators={['isAlphanumeric']}
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, MenuItem } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

const classes = useStyles()

const [value, setValue] = useState()

function handleValue(event) {
  setValue(event.target.value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  debounceTime={1000}
  // instantValidate={true}
>
  <Box display="flex" alignItems="baseline">
    <UTextField
      label="Alphanumeric text"
      onChange={handleValue}
      name="alphanumeric"
      variant="outlined"
      className={classes.textField}
      value={value}
      validators={['isAlphanumeric']}
    />
    <Button
      className={classes.margin}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      type="submit"
    >
      Submit
    </Button>
  </Box>
</UValidatorForm>
//   )
// }
```

`Safe text : isSafeText`

```html
validators={['isSafeText']}
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, MenuItem } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

const classes = useStyles()

const [value, setValue] = useState()

function handleValue(event) {
  setValue(event.target.value)
}

function handleSubmit() {
  // Submit the changes from here
}

// return (
;<UValidatorForm
  ref={form}
  onSubmit={handleSubmit}
  onError={errors => console.log(errors)}
  debounceTime={1000}
  // instantValidate={true}
>
  <Box display="flex" alignItems="baseline">
    <UTextField
      label="Safe text"
      onChange={handleValue}
      name="safeText"
      variant="outlined"
      className={classes.textField}
      value={value}
      validators={['isSafeText']}
    />
    <Button
      className={classes.margin}
      color="primary"
      variant="contained"
      onClick={handleSubmit}
      type="submit"
    >
      Submit
    </Button>
  </Box>
</UValidatorForm>
//   )
// }
```

### Add custom rules

```jsx static
import React, { useState, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { UTextField, UValidatorForm, UButton } from '@unicef/material-ui'

export default function ResetPasswordForm() {
  const [user, setUser] = useState({
    password: '',
    repeatPassword: '',
  })
  const form = useRef('form')
  const { password, repeatPassword } = user

  useEffect(() => {
    // Add your own rule
    UValidatorForm.addValidationRule('isPasswordMatch', value => {
      if (value !== password) {
        return false
      }
      return true
    })
  })

  function handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    setUser({ ...user, [name]: value })
  }

  function handleSubmit() {
    // your submit logic
  }

  return (
    <UValidatorForm
      ref={form}
      onBlur={handleSubmit}
      onError={errors => console.log(errors)}
      // debounceTime={1000}
      instantValidate={true}
    >
      <UTextField
        label="Password"
        onChange={handleChange}
        variant="outlined"
        name="password"
        type="password"
        validators={['required']}
        value={user.password}
      />
      <UTextField
        label="Repeat password"
        onChange={handleChange}
        variant="outlined"
        name="repeatPassword"
        type="password"
        validators={['isPasswordMatch', 'required']}
        customErrorMessages={{ required: 'required field' }}
        value={user.repeatPassword}
      />
      <UButton uPrimary type="submit">
        Submit
      </UButton>
    </UValidatorForm>
  )
}
```
