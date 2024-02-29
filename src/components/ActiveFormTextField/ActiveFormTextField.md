Typography Variant:

```html
typographyVariant="h6"
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Box, Checkbox, MenuItem, Radio, FormGroup, FormControl, FormLabel, FormControlLabel, RadioGroup, Grid } from'@mui/material'
import { UValidatorForm, UValidatorComponent } from '../../index.js' // change it to '@unicef/material-ui'

// export default function ActiveForm() {

  const form = useRef('form')
  const [value, setValue] = useState(14)

  function handleValue(event) {

    setValue(event.target.value)
  }

  // return (
    <UValidatorForm
      ref={form}
      onError={errors => console.log(errors)}
      debounceTime={1000}
    // instantValidate={true}
    >
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ActiveFormTextField
            label="Default"
            onChange={handleValue}
            name="task effort"
            value={value}
            variant="outlined"
            validators={['required', 'isNumber']}
            customErrorMessages={{required: 'required field'}}
          />
          </Grid>
          <Grid item xs={12}>
          <ActiveFormTextField
            label="Typography Variant"
            onChange={handleValue}
            name="task effort"
            value={value}
            typographyVariant='h6'
            variant="outlined"
            validators={['required', 'isNumber']}
            customErrorMessages={{required: 'required field'}}
          />
        </Grid>
      </Grid>
    </UValidatorForm>
//   )
// }

```
FullWidth and Multiline:

```html
fullWidth
multiline
```

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Box, Checkbox, MenuItem, Radio, FormGroup, FormControl, FormLabel, FormControlLabel, RadioGroup, Grid } from'@mui/material'
import { UValidatorForm, UValidatorComponent } from '../../index.js' // change it to '@unicef/material-ui'

// export default function ActiveForm() {

  const form = useRef('form')
  const [value, setValue] = useState("Content")

  function handleValue(event) {

    setValue(event.target.value)
  }

  // return (
    <UValidatorForm
      ref={form}
      onError={errors => console.log(errors)}
      debounceTime={1000}
    // instantValidate={true}
    >
      <ActiveFormTextField
        onChange={handleValue}
        name="task effort"
        fullWidth
        multiline
        value={value}
        typographyVariant='subtitle1'
        variant="outlined"
        validators={['required', 'isNumber']}
        errorMessages={['this field is required', 'Value must be number']}
      />
    </UValidatorForm>
//   )
// }

```

Card with title and description:
```jsx
import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Card,
  CardHeader,
  Grid,
  Divider,
  Typography,
} from'@mui/material'
import { UValidatorForm, ActiveFormTextField } from '../../index.js';

const useStyles = makeStyles(theme => ({
  root: {
  },
  margin: {
    margin: '16px 0px'
  },
  input: {
    borderRadius: 0,
  }
}));

// export default function CardsExample() {
  const classes = useStyles();

  // return (
    <React.Fragment >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <UValidatorForm>
              <ActiveFormTextField placeholder="Title" typographyVariant="h6" variant="outlined" fullWidth multiline />
            </UValidatorForm>
            <Divider />
            <UValidatorForm>
              <ActiveFormTextField placeholder="Description" typographyVariant="p" variant="outlined" fullWidth multiline />
            </UValidatorForm>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
//   );
// }
```