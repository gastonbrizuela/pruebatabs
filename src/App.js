import React, {useState} from 'react';
import SimpleTabs from './Component/SimpleTabs'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Card, CardContent} from '@material-ui/core';
import FullWidthTabs from './Component/FullWidthTabs'
import ButtonAppBar from './Component/ButtonAppBar'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    width: "95%"
  },
  button: {
    width: '100%',
    margin: theme.spacing(3, 1, 1, 1),
    input: {
      display: 'none',
    }
  }
}));

function App() {
  const [tabs,agregarTabs] = useState([])
  const [contador, agregarContador] = useState(0)

  function createButtonsAction(name) {
    return { name };
  }
  
  const ButtonsAction = [
    createButtonsAction("Facturacion"),
    createButtonsAction("Reporting"),
    createButtonsAction("Stock"),
    createButtonsAction("Clientes"),
    createButtonsAction("Libres"),
    createButtonsAction("CRM"),
    createButtonsAction("Asistencia Pedido"),
    createButtonsAction("Soporte/TKT"),
  ];

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
    <Grid container spacing={1}  >
      <ButtonAppBar></ButtonAppBar>
      <Grid item xs={11} >
        <SimpleTabs tabs = {tabs} handleClearTab= {handleClearTab}></SimpleTabs>
      </Grid>
      <Grid item xs={1}>
          <Card className={classes.paper} >
            <CardContent>
            {ButtonsAction.map(actionButton => (
              <Button onClick = {handleOnClick} variant="contained" color="primary" className={classes.button}>
                {actionButton.name}
              </Button>))}
            </CardContent>
          </Card>
          <Card className={classes.paper}>
              <CardContent>
                Estado de la conxeccion
              </CardContent>
          </Card>
      </Grid>
    </Grid>
  );
}

export default App;
