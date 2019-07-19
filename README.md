# [UNICEF Material-ui](https://unicef.github.io/unicef-material-ui/)

Customized version of the material UI with react for UNICEF

## Getting started

In order to use the UNICEF's Material UI in your project you can download using npm.

### Using npm

First, install the npm package

```bash
 npm install @unicef/unicef-material-ui

```

## Usage

### theme

 This is customized version of theme for whole application. 
 Add a `MuiThemeProvider` to the top level of your app to pass the theme down the React component tree. Then, you can access the theme object in style functions.

 More info: <a href="https://material-ui.com/styles/advanced/#theming">Material-ui theming</a>

App.js

```jsx
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

### Header
Header needs be wrapped inside theme using `MuiThemeProvider`,
Either to the top level of your app or inside any component.

Header is re-usable component, that contains lot of options which are already developed,If you want to use, some are by default and some need to enable it by using props.

  ```jsx
  import React from 'react'
  import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
  import { Header, theme } from 'unicef-material-ui'

  export default function App() {

    return (
      <MuiThemeProvider theme={theme}>
        <Header
            applicationName="Application"
            navLinks={<NavLinks />}
            tabs={<NavTabs />}
            // hideLogo={false}
            // logoBorderLine={false}
            // logo={<img alt="user" src={avatar} />}
            menuItems={<MenuItems />}
            menuTabs={<MenuTabs />}
            menuButton={true}
        />
      </MuiThemeProvider>
    )
  }
```

Header component provides : 
  * #### Humburger Menu : 
  Button with humburger icon on to first left in the header, Enables the side bar with click.

    It is enabled by default, If it is not required in your application pass below as prop in the `Header component`. 

    `prop-type : 'Boolean'`

    ```
     menuButtton={false}
    ```
  * #### Application Name : 
  Name of your appliaction, will be displayed left side in the header after the menu button. 

    Which will be enabled only, if you pass applicationName.

    `prop-type : 'String'`

    ```
      applicationName={"Material Ui"}
    ```
  
  * #### Logo : 
  Logo may be your own logo or else by default it will be UNICEF Logo.
   There are few options in logo
    * If you need hide UNICEF Logo.
    
      `prop-type : 'Boolean'`
    ```
      hideLogo = {true}
    ```

    * And then, It's optional, You can also use your own logo or image.

       `prop-type : 'component'`
    ```
      logo = {<img alt="user" src={avatar} />}
    ```
  * #### Logo border line : 
  It is the separator line between application name and logo with white border.
  Which is enabled by default when use UNICEF Logo.

    `prop-type : 'Boolean'`
    
      ```
        logoBorderLine={false}
      ```
  * #### Navigation Links: 
    Navigation Links are displyed on right side of header with customized background color.
      you can develop your own component with `custom Links and dropdowns` and pass it as prop.

    `prop-type : 'component'`
    
      ```
        navLinks={<NavLinks />}
      ```
  * #### Navigation Tabs: 
    Navigation tabs are displyed below the header with customized Nav tabs component.
    use material ui [tabs](https://material-ui.com/components/tabs/) for creating customised tabs.

    `prop-type : 'component'`
    
      ```
        navLinks={<NavTabs />}
      ```
   * #### Menu Items: 
    Menu Items are the `Navigation Links` displayed in side bar only in the mobile view, for responsive web we hide Navigation Links in screens smaller than medium.
    You can develop your own component with material ui `<ListItems />` and pass it as prop.

      `prop-type : 'component'`
    
      ```
        menuItems={<MenuItems />}
      ```
    
   * #### Menu Tabs: 
     Menu Tabs are the `Navigation Tabs`. Which is always displayed in the side bar when you click on humburger menu button.
     If you want to use it.

     `prop-type : 'component'`
    
      ```
        menuTabs={<MenuTabs />}
      ```

# Contribution

Just clone the project and make a pull request.

# License

Distributed under GLPv3.
