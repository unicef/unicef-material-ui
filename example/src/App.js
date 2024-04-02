import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
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
          <UContent headerHeight={114}>
            <Routes>
              <Route
                path={'/'}
                element={
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
                }
              ></Route>
              <Route path={`/layout`} element={<Layout />} />
              <Route path={`/forms`} element={<FormValidator />} />
              <Route
                path={`/interactive-views`}
                element={<InteractiveViews />}
              />
              <Route path={`/pickers`} element={<Pickers />} />
            </Routes>
          </UContent>
        </ULayout>
      </UNICEFStyleProvider>
    </ThemeProvider>
  )
}
