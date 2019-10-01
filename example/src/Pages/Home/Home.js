import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import {
  ULayout,
  USideBar,
  UContent,
} from 'unicef-material-ui'
import { SideBarContent, Layout, InteractiveViews, FormValidator } from '../../components'
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Home({ match }) {

  const path = window.location.pathname
  const [selectedNode, setSelectedNode] = React.useState(path)

  function handleClick(e, url) {
    setSelectedNode(url)
  }

  return (
    <React.Fragment>
      <ULayout>
        <USideBar headerHeight={64} width={256}>
          <SideBarContent selectedNode={selectedNode} handleClick={handleClick} match={match} />
        </USideBar>
        <UContent headerHeight={112}>
          <Switch>
            <Route exact path={match.path} >
              <List style={{ width: 300 }}>
                {['Layout', 'Forms', 'Interactive views'].map((text, index) => (
                  <ListItem
                    button
                    key={text}
                    component={Link}
                    to={`${match.path}${text.replace(/\s+/g, '').toLowerCase()}`}
                    onClick={(e) => handleClick(e, `/${text.replace(/\s+/g, '').toLowerCase()}`)}
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Route>
            <Route path={`${match.path}layout`} component={Layout} />
            <Route path={`${match.path}interactiveviews`} component={InteractiveViews} />
            <Route path={`${match.path}forms`} component={FormValidator} />
          </Switch>
        </UContent>
      </ULayout>
    </React.Fragment>
  )
}