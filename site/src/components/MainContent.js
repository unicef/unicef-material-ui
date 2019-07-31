import React from 'react'
import { Typography, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(0, 2),
  },
}));


export default function MainContent () {
     const classes = useStyles()
    return (
        <React.Fragment>
            <Box m={9} display="flex" justifyContent="center">
                <Typography variant="h1">
                    UNICEF Material UI                     
                </Typography>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center">
                <Link href="/example" color="primary" className={classes.link}>
                    Demo
                </Link>
                <Link href="/docs" color="primary" className={classes.link}>
                    Component docs
                </Link>
            </Box>
        </React.Fragment>
    )
}