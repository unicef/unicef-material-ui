Async badge Variant:

```html
variant = 'loading'
variant = 'error'
variant = 'success'
```

```jsx
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

  
  function handleReset() {
    //call reset function
    // set visible false
  }

  
  
   <UAsyncBadge
      variant = "loading"
      text="loading"
      visible={true}
      onReset = {handleReset}
    />
    <UAsyncBadge
      variant = "success"
      text="success"
      visible={true}
      onReset = {handleReset}
    />
    <UAsyncBadge
      variant = "error"
      text="error message"
      visible={true}
      onReset = {handleReset}
    />