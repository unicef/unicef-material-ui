import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import {
  theme,
  UNICEFStyleProvider,
  ULayout,
  USideBar,
  UContent,
} from 'unicef-material-ui'
import './App.css'
import { List, ListItem, ListItemText } from '@mui/material'
import {
  Header,
  Pickers,
  SideBarContent,
  Layout,
  InteractiveViews,
  FormValidator,
  Accessibility,
} from './components'

export default function App() {
  const path = window.location.hash.split('#/')
  const pathUrl = path[1]
  const [selectedNode, setSelectedNode] = useState(pathUrl)

  function handleClick(e, url) {
    setSelectedNode(url)
  }

  return (
    <ThemeProvider theme={theme}>
      <UNICEFStyleProvider>
        <Header />
        <ULayout>
          <USideBar headerHeight={124} width={256}>
            <SideBarContent
              selectedNode={selectedNode}
              handleClick={handleClick}
            />
          </USideBar>
          <UContent id="main" headerHeight={114}>
            <Switch>
              <Route exact path={'/'}>
                <List style={{ width: 300 }}>
                  {['Layout', 'Forms', 'Interactive views', 'Pickers'].map(
                    (text, index) => (
                      <ListItem
                        button
                        key={text}
                        component={Link}
                        to={`${text.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={e =>
                          handleClick(
                            e,
                            `${text.replace(/\s+/g, '-').toLowerCase()}`
                          )
                        }
                      >
                        <ListItemText primary={text} />
                      </ListItem>
                    )
                  )}
                </List>
              </Route>
              <Route exact path={`/layout`} component={Layout} />
              <Route exact path={`/forms`} component={FormValidator} />
              <Route
                exact
                path={`/interactive-views`}
                component={InteractiveViews}
              />
              <Route exact path={`/pickers`} component={Pickers} />
              <Route exact path={`/accessibility`} component={Accessibility} />
            </Switch>
          </UContent>
        </ULayout>
      </UNICEFStyleProvider>
    </ThemeProvider>
  )
}
