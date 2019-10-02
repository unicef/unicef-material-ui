import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {
  theme,
  UNICEFStyleProvider,
  ULayout,
  USideBar,
  UContent,
} from 'unicef-material-ui'
import './App.css'
import { List, ListItem, ListItemText } from "@material-ui/core"
import { Header, SideBarContent, Layout, InteractiveViews, FormValidator } from './components'

export default function App() {
  const path = window.location.hash.split('#/')
  const pathUrl = path[1]
  const [selectedNode, setSelectedNode] = React.useState(pathUrl)

  function handleClick(e, url) {
    setSelectedNode(url)
  }

  return (
    <MuiThemeProvider theme={theme}>
      <UNICEFStyleProvider>
        <Header />
        <ULayout>
          <USideBar headerHeight={124} width={256}>
            <SideBarContent selectedNode={selectedNode} handleClick={handleClick} />
          </USideBar>
          <UContent headerHeight={114}>
            <Switch>
              <Route exact path={'/'}>
                <List style={{ width: 300 }}>
                  {['Layout', 'Forms', 'Interactive views'].map((text, index) => (
                    <ListItem
                      button
                      key={text}
                      component={Link}
                      to={`${text.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={(e) => handleClick(e, `${text.replace(/\s+/g, '-').toLowerCase()}`)}
                    >
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Route>
              <Route exact path={`/layout`} component={Layout} />
              <Route exact path={`/forms`} component={FormValidator} />
              <Route exact path={`/interactive-views`} component={InteractiveViews} />
            </Switch>
          </UContent>
        </ULayout >
      </UNICEFStyleProvider>
    </MuiThemeProvider>
  )
}

