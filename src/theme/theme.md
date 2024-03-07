### Adding UNICEF theme to your app

This is customized version of theme for whole application. 
To use UNICEF theme add `ThemeProvider` at the top level of your app, it will set the custom styles of unicef down to the component tree. 

More info: <a href="https://mui.com/material-ui/customization/theming/">Material-ui theming</a>



```jsx static

import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'unicef-material-ui'

export default function App() {

  return (
    <MuiThemeProvider theme={theme}>
      {/* Components*/}
    </MuiThemeProvider>
  )
}
```