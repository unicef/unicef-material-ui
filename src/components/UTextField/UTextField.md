### Examples 

`Email : isEmail and required`

```html
validators={['required', 'isEmail']}
```

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, MenuItem } from '@material-ui/core';
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
  }
}));

// export default function FormValidator() {

  const form = useRef('form');

  const classes = useStyles();

  const [value, setValue] = useState();

  function handleValue(event) {
    console.log(event.target.value)
    setValue(event.target.value)
  };

  function handleSubmit() {
    // Submit the changes from here
  };

  // return (
    <UValidatorForm
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
          className={classes.textField}
          value={value}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
        />
        <Button className={classes.margin} color="primary" variant="contained" onClick={handleSubmit} type="submit">Submit</Button>
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
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, MenuItem } from '@material-ui/core';
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
  }
}));

// export default function FormValidator() {

  const form = useRef('form');

  const classes = useStyles();

  const [value, setValue] = useState();

  function handleValue(event) {
    console.log(event.target.value)
    setValue(event.target.value)
  };

  function handleSubmit() {
    // Submit the changes from here
  };

  // return (
    <UValidatorForm
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
          errorMessages={['this field is required', 'Value must be number only', 'value must be possitive', 'value must be less than 255']}
        />
        <Button className={classes.margin} color="primary" variant="contained" onClick={handleSubmit} type="submit">Submit</Button>
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
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, MenuItem } from '@material-ui/core';
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
  }
}));

// export default function FormValidator() {

  const form = useRef('form');

  const classes = useStyles();

  const [value, setValue] = useState();

  function handleValue(event) {
    setValue(event.target.value)
  };

  function handleSubmit() {
    // Submit the changes from here
  };

  // return (
    <UValidatorForm
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
          errorMessages={['this field is required', 'value must be between 0 - 9',]}
        />
        <Button className={classes.margin} color="primary" variant="contained" onClick={handleSubmit} type="submit">Submit</Button>
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
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, MenuItem } from '@material-ui/core';
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
  }
}));

// export default function FormValidator() {

  const form = useRef('form');

  const classes = useStyles();

  const [value, setValue] = useState();

  function handleValue(event) {
    setValue(event.target.value)
  };

  function handleSubmit() {
    // Submit the changes from here
  };

  // return (
    <UValidatorForm
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
          errorMessages={['this field is required', 'minimum character length is 6', 'maximum character length is 12']}
        />
        <Button className={classes.margin} color="primary" variant="contained" onClick={handleSubmit} type="submit">Submit</Button>
      </Box>
    </UValidatorForm>
//   )
// }
```