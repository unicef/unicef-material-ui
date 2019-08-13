import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
}))

/**
 * ULayout is the Structured layout of the page, so that it contains side bar on the left and main content to the right.
 *
 * ULayout has two chidren components:
 * * UContent
 * * USideBar
 */

export default function ULayout(props) {
  const classes = useStyles()

  return <div className={classes.root}>{props.children}</div>
}
