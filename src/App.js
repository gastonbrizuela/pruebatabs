import React, {useState} from 'react';
import SimpleTabs from './Component/SimpleTabs'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Card, CardContent} from '@material-ui/core';
import WifiIcon from '@material-ui/icons/Wifi'
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { textAlign } from '@material-ui/system';
import StatusConectionConteiner from './Component/commons/menu/status-connection/statusConnectionConteiner'
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
    width: "95%",
    textAlign: "center"
  },
  button: {
    width: '100%',
    margin: theme.spacing(3, 1, 1, 1),
    input: {
      display: 'none',
    }
  },
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

  const handleOnClick = (type)=> {
    agregarContador(contador+1)
    const tabDic = {counter:contador,type}
    const listTabs = [...tabs,tabDic]
    agregarTabs(listTabs)
  }

  const handleClearTab = (i)=>{
    const index = tabs.findIndex(obj => obj.counter === i)
    console.log("tabs original"+tabs)
    console.log("index"+ index )
    let copTabs = [...tabs]
    console.log("coptabs "+copTabs)
    const prueba = copTabs.splice(index,1)
    agregarTabs(copTabs)
  }

  const classes = useStyles();
  return (
    <Grid container spacing={1}  >
      <Grid item xs={11} >
        <SimpleTabs tabs = {tabs} handleClearTab= {handleClearTab}></SimpleTabs>
      </Grid>
      <Grid item xs={1}>
        <Card className={classes.paper} >
          <CardContent>
            {ButtonsAction.map(actionButton => (
              <Button key ={actionButton.name} onClick = {()=>handleOnClick(actionButton.name)} variant="contained" color="primary" className={classes.button} name = {actionButton.name}>
                {actionButton.name}
              </Button>))}
          </CardContent>
        </Card>
        <Card className={classes.paper}>
          <CardContent>
              <StatusConectionConteiner></StatusConectionConteiner>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
