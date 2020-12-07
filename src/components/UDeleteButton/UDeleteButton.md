Delete button usage:

```html
variant = 'menuItem'
variant = 'icon'
```

```jsx static
import React from 'react'
export default function Sample() {
  const id = 1
  function handleDelete(event, id) {
    //call delete function
  }
  return (
   <React.Fragement>
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
    </React.Fragement>
  )
}
  
    

