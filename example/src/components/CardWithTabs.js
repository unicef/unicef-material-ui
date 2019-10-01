import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Tabs,
  Tab,
  Card,
  Typography,
  Grid,
} from '@material-ui/core'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function CardWithTabs() {
  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ margin: '16px 0px' }}>Card with tabs</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Item One</TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
        </Card>
      </Grid>
    </Grid>
  )
}
