Auto complete field usage:

```jsx static
 <UAutoComplete
    value={autocompleteSelectedOption}
    label={label}
    options={autocompleteOptions}
    isRequired={minLength > 0}
    onChange={handleChange}
    minLength={minLength}
    maxLength={maxLength}
    allowContextSpecific={allowContextSpecific}
    usedItemIds={usedIds}
    readOnly={readOnly}
    onBlur={onBlur}
    {...props}
  />
```
### Examples 

```jsx
import React, { useState } from 'react'
import { Typography, Grid } from '@mui/material'
import UValidatorForm from '../UValidatorForm'
  const [value, setValue] = useState('')
  const handleBlur = () => {
    // call necessary action
  }
  const handleChange = value => {
    setValue(value)
  }
  const autocompleteOptions = [{
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
    }
  ];
  
  <Grid container>
    <Grid item xs={12} sm={4} md={3}>
      <Typography variant="h5" style={{ margin: '32px 0px' }}>
        Auto complete
      </Typography>
      <UValidatorForm>
        <UAutoComplete
          value={value}
          label={'labelName'}
          options={autocompleteOptions}
          isRequired={true}
          onChange={handleChange}
          minLength={1}
          maxLength={50}
          allowContextSpecific={true}
          readOnly={false}
          onBlur={handleBlur}
         >
         </UAutoComplete>
       </UValidatorForm>
    </Grid>
  </Grid>
```