# UNICEF material-ui

Customized version for UNICEF of [Material UI](https://material-ui.com/). Material UI is a set of [ReactJS](http://reactjs.org) user interface components based on [Google's material design](https://material.io/design/) written in Javascript.

You can see a **[Demo site](https://unicef.github.io/unicef-material-ui/example/)** and the **[reference documentation](https://unicef.github.io/unicef-material-ui/)**. 


## Getting started

In order to use the UNICEF's Material UI components in your React project install the npm package.

```bash
 npm install @unicef/material-ui
```

## Usage

### Adding UNICEF theme to your app
To use UNICEF theme add `MuiThemeProvider` at the top level of your app

```jsx
// App.js
import React from "react"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { theme } from "unicef-material-ui"

export default function App() {
  return <MuiThemeProvider theme={theme}>{/* Components*/}</MuiThemeProvider>
}
```
More info: <a href="https://material-ui.com/styles/advanced/#theming">Material-ui theming</a>


### Example project

You have an full example react project that showcases how to use the components in [/example](https://github.com/unicef/unicef-material-ui/tree/master/example]example/).

## Development

In order to extend the components, clone the project and install the dependencies.

```bash
git clone https://github.com/unicef/unicef-material-ui.git
npm install
```

The following commands are available:

### `npm start`

Builds the library of components in the `dist`folder.

```bash
npm start
```

Apart from the [documentation](https://unicef.github.io/unicef-material-ui/) The package comes with an [example](https://github.com/unicef/unicef-material-ui/tree/master/example) app - create-react-app - which is useful for testing and running the components.

```bash
cd example
npm install # only if it is first time
npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

It will reload automatically upon edits. Lint errors are also displayed on the console.

### `npm run build`

Builds the component library for production. Leaves the output in the `dist` folder.

### `npm run styleguide`

Generates the documentation to be viewed in [http://localhost:6060](http://localhost:6060).

Page reloads on any change. Lint errors are displayed in the console, too.

We use [styleguidelist](https://react-styleguidist.js.org/) for documenting our custom components.

### `npm run styleguide:build`

Builds the styleguide for production. The output is stored in `styleguide` folder.

## License

Distributed under GLPv3.
