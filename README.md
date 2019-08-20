# UNICEF material-ui

Customized version for UNICEF of [Material UI](https://material-ui.com/). Material UI is a set of [ReactJS](http://reactjs.org) user interface components based on [Google's material design](https://material.io/design/) written in Javascript.

You can see a live **[Demo site](https://unicef.github.io/unicef-material-ui/)**.

## Getting started

In order to use the UNICEF's Material UI components in your React project install the npm package.

```bash
 npm install @unicef/material-ui
```

## Usage

### Adding UNICEF theme to your app

This is customized version of theme for whole application. 
To use UNICEF theme add `MuiThemeProvider` at the top level of your app, it will set the custom styles of unicef down to the component tree. 

More info: <a href="https://material-ui.com/styles/advanced/#theming">Material-ui theming</a>


```jsx
// App.js

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

### Example project

You have an full example react project that showcases hwo to use the components in [/example](https://github.com/unicef/unicef-material-ui/tree/master/example]example/).

## Custom components

All components require to be wrapped inside of a theme using `MuiThemeProvider` at the top level of the `App`, as explained above.

## Development

In order to extend the components, clone the project and install dependencies.

```bash
$ git clone https://github.com/unicef/unicef-material-ui.git
$ npm install
```

The following commands are available: 

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

It will reload automatically upon edits. Lint errors are also displayed on the console.

### `npm run build`

Builds the app for production to the `dist` folder.

It bundles application in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run styleguide`
Generates the documentation the development mode.
Open [http://localhost:6060](http://localhost:6060) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

We use [styleguidelist](https://react-styleguidist.js.org/) for documenting our custom components.


### `npm run styleguide:build`
Builds the styleguide for production to the `styleguide` folder.<br>
It correctly bundles React-styleguide in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## License

Distributed under GLPv3.
