# UNICEF material-ui

[![npm version](https://badge.fury.io/js/%40unicef%2Fmaterial-ui.svg)](https://badge.fury.io/js/%40unicef%2Fmaterial-ui)

Customized version for UNICEF of [Material UI](https://mui.com/). Material UI is a set of [ReactJS](http://reactjs.org) user interface components based on [Google's material design](https://material.io/design/) written in Javascript.

You can see a **[Demo site](https://unicef.github.io/unicef-material-ui/example/)** and the **[reference documentation](https://unicef.github.io/unicef-material-ui/)**.

## Getting started

In order to use the UNICEF's Material UI components in your React project install the npm package.

```bash
 npm install @unicef/material-ui
```

## Usage

### Adding UNICEF theme to your app

To use UNICEF theme add `ThemeProvider` at the top level of your app and warp you components inside `UNICEFStyleProvider`

```jsx
// App.js
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme, UNICEFStyleProvider } from '@unicef/material-ui'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UNICEFStyleProvider>
        {/* Components*/}
      </UNICEFStyleProvider>
    </ThemeProvider>
  )
}
```

More info: <a href="https://mui.com/material-ui/customization/theming/">Material-ui theming</a>

### Example project

You have an full example react project that showcases how to use the components in [/example](https://github.com/unicef/unicef-material-ui/tree/master/example]example/).

## Development

In order to extend the components, clone the project and install the dependencies.

```bash
git clone https://github.com/unicef/unicef-material-ui.git
cd unicef-material-ui
npm install
```

The following commands are available:

### `npm start`

Builds the library of components in watch mode.

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

### `npm run docs`

Generates the documentation to be viewed in [http://localhost:6060](http://localhost:6060).

Page reloads on any change. Lint errors are displayed in the console, too.

We use [styleguidelist](https://react-styleguidist.js.org/) for documenting our custom components.

### `npm run build:docs`

Builds the styleguide for production. The output is stored in `styleguide` folder.

### `npm run build:site`

Builds the styleguide docs as well as the example. The output is stored in `site` folder.

### `npm run deploy`

Runs `npm run build:site` and then deploys the output to Github `gh-pages`.

To deploy from a clean repo
```bash
git clone https://unicef.github.io/unicef-material-ui/
cd unicef-material-ui
npm install
npm build
cd example
npm install
cd ..
npm deploy
```

## Release a new version in npm registry

There is a Github action (pipeline) that automatically releases in npm whenever a release is created.
To create a release, previously you need to ensure the version is changed in packages.json and then create a tag in the repository. These are the steps:

1. Get the latest `master`
2. Edit `packages.json` and increase the version number and save to origin/master.  
    ```bash
      # After editing packages.json
      git commit -m "bump version x.y.z"
      git push origin master
      ```
3.  Create a tag and push it to master:
    ```bash
      git tag releases/vX.Y.Z  # where X.Y.Z is a semver number such as 1.6.9
      git push origin tags
    ```
4. Then in the GitHub web interface create the release. The action will be automatically triggered.
    
## About UNICEF

[UNICEF](https://www.unicef.org/) works in over 190 countries and territories to protect the rights of every child. UNICEF has spent more than 70 years working to improve the lives of children and their families. In UNICEF, **we believe all children have a right to survive, thrive and fulfill their potential – to the benefit of a better world**.

[Donate](https://donate.unicef.org/donate/now)


## Collaborations and support

Just fork the project and make a pull request. You may also [consider donating](https://donate.unicef.org/donate/now).



## License

Distributed under GLPv3.
