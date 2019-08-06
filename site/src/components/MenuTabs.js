import React from 'react'
import { Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    color: 'black',
    backgroundColor: 'inherit',
    margin: `${theme.spacing(0, 2)} !important`,
  },
}));


export default function MainTabs () {
     const classes = useStyles()
    return (
        <React.Fragment>
            <Box display="flex" flexDirection="column" justifyContent="center">
                <Link href="/unicef-material-ui/example" color="primary" className={classes.link}>
                    Demo
                </Link>
                <Link href="/unicef-material-ui/docs" color="primary" className={classes.link}>
                    Component docs
                </Link>
            </Box>
        </React.Fragment>
    )
}