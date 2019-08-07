import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}))

export default function UPageContent(props) {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div style={{ minHeight: props.headerHeight }} />
      {props.children}
    </main>
  )
}
