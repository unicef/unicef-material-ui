import React from "react"
import { Switch, Route } from "react-router-dom"
import {
  ULayout,
  USideBar,
  UContent,
} from 'unicef-material-ui'
import { SideBarContent, Layout, InteractiveViews, FormValidator } from '../../components'

export default function Home(props) {

  return (
    <React.Fragment>
      <ULayout>
        <USideBar headerHeight={64} width={256}>
          <SideBarContent {...props} />
        </USideBar>
        <UContent headerHeight={112}>
          <Switch>
            <Route path={`/layout`} component={Layout} />
            <Route path={`/interactiveviews`} component={InteractiveViews} />
            <Route path={`/forms`} component={FormValidator} />
          </Switch>
        </UContent>
      </ULayout>
    </React.Fragment>
  )
}