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
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import UValidatorForm from '../UValidatorForm'

const PREFIX = 'UTextFieldExample'
const classes = {
  textField: `${PREFIX}-textField`,
  margin: `${PREFIX}-margin`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.textField}`]: {
    margin: theme.spacing(1),
    width: 195,
    minWidth: `195px!important`,
  },
  [`& .${classes.margin}`]: {
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
  <StyledDiv>
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
      options={currencies}
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
  </StyledDiv>
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
import { styled } from '@mui/material/styles'
import { Button, MenuItem } from '@mui/material'
import UValidatorForm from '../UValidatorForm'

const PREFIX = 'UTextFieldExample'
const classes = {
  margin: `${PREFIX}-margin`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.margin}`]: {
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

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
  <StyledDiv>
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
  </StyledDiv>
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
import { styled } from '@mui/material/styles'
import { Button, MenuItem } from '@mui/material'
import UValidatorForm from '../UValidatorForm'
import UButton from '../UButton'

const PREFIX = 'UTextFieldExample'
const classes = {
  margin: `${PREFIX}-margin`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.margin}`]: {
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

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
  <StyledDiv>
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
  </StyledDiv>
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
import { styled } from '@mui/material/styles'
import { Button, MenuItem } from '@mui/material'
import UValidatorForm from '../UValidatorForm'

const PREFIX = 'UTextFieldExample'
const classes = {
  textField: `${PREFIX}-textField`,
  margin: `${PREFIX}-margin`,
  dense: `${PREFIX}-dense`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.textField}`]: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  [`& .${classes.dense}`]: {
   marginTop: theme.spacing(2),
  },
  [`& .${classes.margin}`]: {
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

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
  <StyledDiv>
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
  </StyledDiv>
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
import { styled } from '@mui/material/styles'
import { Button, MenuItem } from '@mui/material'
import UValidatorForm from '../UValidatorForm'

const PREFIX = 'UTextFieldExample'
const classes = {
  textField: `${PREFIX}-textField`,
  margin: `${PREFIX}-margin`,
  dense: `${PREFIX}-dense`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.textField}`]: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  [`& .${classes.dense}`]: {
   marginTop: theme.spacing(2),
  },
  [`& .${classes.margin}`]: {
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

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
  <StyledDiv>
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
  </StyledDiv>
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
import { styled } from '@mui/material/styles'
import { Button, MenuItem } from '@mui/material'
import UValidatorForm from '../UValidatorForm'

const PREFIX = 'UTextFieldExample'
const classes = {
  textField: `${PREFIX}-textField`,
  margin: `${PREFIX}-margin`,
  dense: `${PREFIX}-dense`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.textField}`]: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  [`& .${classes.dense}`]: {
   marginTop: theme.spacing(2),
  },
  [`& .${classes.margin}`]: {
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

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
  <StyledDiv>
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
  </StyledDiv>
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
import { styled } from '@mui/material/styles'
import { Button, MenuItem } from '@mui/material'
import UValidatorForm from '../UValidatorForm'

const PREFIX = 'UTextFieldExample'
const classes = {
  textField: `${PREFIX}-textField`,
  margin: `${PREFIX}-margin`,
  dense: `${PREFIX}-dense`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.textField}`]: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  [`& .${classes.dense}`]: {
   marginTop: theme.spacing(2),
  },
  [`& .${classes.margin}`]: {
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

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
  <StyledDiv>
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
  </StyledDiv>
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
import { styled } from '@mui/material/styles'
import { Button, MenuItem } from '@mui/material'
import UValidatorForm from '../UValidatorForm'

const PREFIX = 'UTextFieldExample'
const classes = {
  textField: `${PREFIX}-textField`,
  margin: `${PREFIX}-margin`,
  dense: `${PREFIX}-dense`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.textField}`]: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  [`& .${classes.dense}`]: {
   marginTop: theme.spacing(2),
  },
  [`& .${classes.margin}`]: {
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

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
  <StyledDiv>
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
  </StyledDiv>
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
import { styled } from '@mui/material/styles'
import { Button, MenuItem } from '@mui/material'
import UValidatorForm from '../UValidatorForm'

const PREFIX = 'UTextFieldExample'
const classes = {
  textField: `${PREFIX}-textField`,
  margin: `${PREFIX}-margin`,
  dense: `${PREFIX}-dense`,
}
const StyledDiv = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [`& .${classes.textField}`]: {
    margin: theme.spacing(1),
    minWidth: 195,
  },
  [`& .${classes.dense}`]: {
   marginTop: theme.spacing(2),
  },
  [`& .${classes.margin}`]: {
    marginLeft: theme.spacing(1),
  },
}))

// export default function FormValidator() {

const form = useRef('form')

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
  <StyledDiv>
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
  </StyledDiv>
</UValidatorForm>
//   )
// }
```

### Add custom rules

```jsx static
import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@mui/material'
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
