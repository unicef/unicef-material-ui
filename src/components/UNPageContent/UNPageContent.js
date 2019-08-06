import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  toolbar: {
      minHeight: '112px'
  }
}));

export default function UNPageContent(props) {
  const classes = useStyles();
    
  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        {props.children}
    </main>
  );
}