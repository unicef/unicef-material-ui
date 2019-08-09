import React from "react"
import { Tab, Tabs, Link, Box } from "@material-ui/core"
import PropTypes from "prop-types"

/** Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. */
export default function UHeaderMainMenu(props) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const { color, bgcolor, indicatorColor, tabs } = props

  UHeaderMainMenu.propTypes = {
    /**
     *  Click "VIEW CODE" for tabs example
     **/
    tabs: PropTypes.array,
  }

  return (
    <Box bgcolor={bgcolor || "white"}>
      <Tabs
        value={value}
        indicatorColor={indicatorColor || "primary"}
        textColor="primary"
        onChange={handleChange}
      >
        {props.children.map(child => (
          // look for an alternative
          <Tab
            label={child.props.label}
            disabled={child.props.disabled}
            href={child.props.href}
          />
        ))}
      </Tabs>
    </Box>
  )
}
