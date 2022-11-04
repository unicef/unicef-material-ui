Delete button with examples:

```jsx
import { Typography, Grid } from '@mui/material'
import LinkOffIcon from '@mui/icons-material/LinkOff'

  const itemId = 1
  function handleDelete(event, id) {
    console.log(id)
  }

    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Icon variant</Typography>
        <UConfirmationButton
          onConfirm={handleDelete}
          id={itemId}
          buttonText="Delete"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Menu item variant</Typography>
        <UConfirmationButton
          onConfirm={handleDelete}
          id={itemId}
          buttonText="Delete"
          variant="menuItem"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="subtitle1">Custom icon and confirm text</Typography>
        <UConfirmationButton
          onConfirm={handleDelete}
          id={itemId}
          buttonText="Unlink"
          variant="menuItem"
          confirmText='Confirm unlink?'
          confirmActionText='Yes, unlink'
          icon={<LinkOffIcon />}
        />
      </Grid>
    </Grid>
  
````
  
    

