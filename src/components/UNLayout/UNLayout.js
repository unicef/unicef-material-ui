import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

export default function UNLayout(props) {

  const classes = useStyles()
  function child() {
  for (child in props.children){
    if (this.props.children[child].type.displayName === 'UNSidebar'){
      console.log("Warning CardGroup has children that aren't Card components")
    }  
  }
}
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}
