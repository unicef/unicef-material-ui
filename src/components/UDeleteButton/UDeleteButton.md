Delete button Variant:

```html
variant = 'menuItem'
variant = 'icon'
enabled
```

```jsx
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

  const id = 1
  function handleDelete(event, id) {
    //call delete function
  }
  
   <UDeleteButton
      onConfirm={handleDelete}
      id={id}
      tooltipText="Delete"
      variant="menuItem"
    />

    <UDeleteButton
      onConfirm={handleDelete}
      id={id}
      tooltipText="Delete"
    />

    <UDeleteButton
      onConfirm={handleDelete}
      id={id}
      tooltipText="Delete"
      enabled={false}
    />

  
    

