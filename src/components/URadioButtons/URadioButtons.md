Radion button Variant:

```html
variant = 'row'
variant = 'column'
readObly =  true/false
```

```jsx
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
  const radioValue = 'Yes'
  function handleOnOptionChange(event) {
    //call change function
  }
  
   <RadioButtons
      value={radioValue}
      onChange={handleOnOptionChange}
      isReadOnly={false}
      optionLabels={['Yes', 'No']}
      optionValues={['Yes', 'No']}
    ></RadioButtons>

    <RadioButtons
      value={radioValue}
      onChange={handleOnOptionChange}
      isReadOnly={false}
      optionLabels={['Yes', 'No']}
      optionValues={['Yes', 'No']}
      variant="column"
    ></RadioButtons>
    <RadioButtons
      value={radioValue}
      onChange={handleOnOptionChange}
      isReadOnly={true}
      optionLabels={['Yes', 'No']}
      optionValues={['Yes', 'No']}
      variant="column"
    ></RadioButtons>

    

  
    

