import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}))

/**
 * * UContent is to display the  main content of page.
 * * Children under Ucontent will be display in the main content.
 * * UContent must to be wrapped inside the ULayout.
 */
export default function UContent(props) {
  const classes = useStyles(props)
  const { headerHeight } = props

  UContent.propTypes = {
    /** Height of the header including MainMenu */
    headerHeight: PropTypes.string,
  }

  UContent.defaultProps = {
    headerHeight: "64 px",
  }

  return (
    <main className={classes.content}>
      <div style={{ minHeight: headerHeight }} />
      {props.children}
    </main>
  )
}
