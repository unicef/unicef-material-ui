Delete button with examples:

```jsx
import { Typography, Grid } from '@material-ui/core'

  const itemId = 1
  function handleDelete(event, id) {
    console.log(id)
  }

    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Icon variant</Typography>
        <UDeleteButton
          onConfirm={handleDelete}
          id={itemId}
          tooltipText="Delete"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Menu item variant</Typography>
        <UDeleteButton
          onConfirm={handleDelete}
          id={itemId}
          tooltipText="Delete"
          variant="menuItem"
        />
      </Grid>
    </Grid>
  
````
  
    

