import React from 'react';
import SimpleTabs from './Component/SimpleTabs'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={11}>
      <Paper className={classes.paper}>
        <SimpleTabs></SimpleTabs>
      </Paper>
      </Grid>
      <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" className={classes.button}>
              Factura
            </Button>
          </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
