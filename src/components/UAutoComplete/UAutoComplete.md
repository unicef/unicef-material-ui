Auto complete field usage:

```jsx static
 <UAutoComplete
        value={autocompleteSelectedOption}
        label={label}
        options={autocompleteOptions}
        isRequired={minIndicatorLength > 0}
        onChange={handleOnSectorChange}
        minLength={minIndicatorLength}
        maxLength={maxIndicatorLength}
        allowContextSpecific={allowContextSpecific}
        usedItemIds={usedIndicatorsIds}
        readOnly={readOnly}
        onBlur={onBlurIndicator}
        {...props}
      />
```
### Examples 

```jsx
import React, { useState } from 'react'
import { Typography, Grid } from '@material-ui/core'
import UValidatorForm from '../UValidatorForm'

  const [value, setValue] = useState('')
  function handleBlur() {
    // call necessary action
  }

  const handleOnChange = value => {
    setValue(value)
  }

  const autocompleteOptions = [
    {
      id: 1,
      title: 'Sample text1',
      text: 'Sample text1',
    },
    {
      id: 2,
      title: 'Sample text2',
      text: 'Sample text2',
    },
    {
      id: 3,
      title: 'Sample text3',
      text: 'Sample text3',
    },
  ]
   
  <Grid container>
    <Grid item xs={12}>
      <Typography variant="h5" style={{ margin: '32px 0px' }}>
            Auto complete
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={3}>
      <UValidatorForm>
        <UAutoComplete
            value={value}
            label={'labelName'}
            options={autocompleteOptions}
            isRequired={true}
            onChange={handleOnChange}
            minLength={1}
            maxLength={50}
            allowContextSpecific={true}
            readOnly={false}
            onBlur={handleBlur}
         />
       </UValidatorForm>
    </Grid>
   </Grid>
```