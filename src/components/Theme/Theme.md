### Adding UNICEF theme to your app

This is customized version of theme for whole application. 
To use UNICEF theme add `MuiThemeProvider` at the top level of your app, it will set the custom styles of unicef down to the component tree. 

More info: <a href="https://material-ui.com/styles/advanced/#theming">Material-ui theming</a>



```jsx static

import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { theme } from 'unicef-material-ui'

export default function App() {

  return (
    <MuiThemeProvider theme={theme}>
      {/* Components*/}
    </MuiThemeProvider>
  )
}
```