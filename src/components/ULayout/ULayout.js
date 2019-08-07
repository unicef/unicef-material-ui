import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
}))

export default function ULayout(props) {
  const classes = useStyles()

  return <div className={classes.root}>{props.children}</div>
}
