Async badge usage:

```jsx static
import React, { useState, useEffect } from 'react'

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
```