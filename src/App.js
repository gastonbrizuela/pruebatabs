import React, {useState} from 'react';
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
  const [tabs,agregarTabs] = useState([])
  const [contador, agregarContador] = useState(0)

  const handleOnClick = ()=> {
    agregarContador(contador+1)
    console.log(contador)
    const listTabs = [...tabs, contador]
    agregarTabs(listTabs)
    console.log(tabs)
  }

  const handleClearTab = (i)=>{
    const index = tabs.findIndex(obj => obj === i)
    console.log("tabs original"+tabs)
    console.log("index"+ index )
    const copTabs = [...tabs]
    console.log("coptabs "+copTabs)
    const prueba = copTabs.splice(index,1)
    agregarTabs(copTabs)
  }

  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={11}>
      <Paper className={classes.paper}>
        <SimpleTabs tabs = {tabs} handleClearTab= {handleClearTab}></SimpleTabs>
      </Paper>
      </Grid>
      <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Button onClick = {handleOnClick} variant="contained" color="primary" className={classes.button}>
              Factura
            </Button>
          </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
