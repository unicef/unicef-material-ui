import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  CardContent,
  Card,
  CardHeader,
  Grid,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  margin: {
    margin: '16px 0px'
  }
}));

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function Cards() {
  const classes = useStyles();

  return (
    <React.Fragment >
      <Typography variant="h5" className={classes.margin}>
        Cards
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
          <Card>
            <CardHeader component='div' title='Card title'></CardHeader>
            <CardContent>
              <Typography paragraph={true} gutterBottom>
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Typography>
              <Typography variant="p" >
                Last updated 3 mins ago
              </Typography>
            </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader component='div' title='Card with table'></CardHeader>
              <CardContent>
                <Paper className={classes.root}>
                  <Table className={classes.table}>
                      <TableHead>
                      <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      </TableRow>
                      </TableHead>
                      <TableBody>
                      {rows.map(row => (
                          <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                              {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          </TableRow>
                      ))}
                      </TableBody>
                  </Table>
                </Paper>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
    </React.Fragment>
  );
}