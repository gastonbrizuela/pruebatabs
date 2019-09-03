import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
//import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import GridOnIcon from "@material-ui/icons/GridOn";
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    width: "80%"
  },
  formCustomer: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "95%",
    margin: theme.spacing(1, 1, 1, 1)
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const Pos = () => {
  const classes = useStyles();
  const [cliente, cambiarCliente] = useState();
  const [clienteMostrar, cambiarClienteMostrar] = useState(0)

  let dicCliente ={0:{"nombre":"","apellido":"","Estado":""},1:{"nombre":"Gaston","apellido":"brizuela","Estado":"Activo"},2:{"nombre":"carlos","apellido":"Perez","Estado":"Activo"},3:{"nombre":"Rodrigo","apellido":"Mungo","Estado":"Inactivo"}}

  const handleSearchButton = ()=>{
      cambiarClienteMostrar(cliente)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={2} md={2} component={Paper}>
        <Paper className={classes.formCustomer}>
          <InputBase 
            onChange = {e=>cambiarCliente(e.target.value)}
            className={classes.input}
            placeholder="Ingrese el Nombre o DNI"
            inputProps={{ "aria-label": "search customer" }}
          />
          <IconButton onClick = {handleSearchButton} className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <GridOnIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.formCustomer}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemText primary="Nombre" secondary ={dicCliente[clienteMostrar]["nombre"]} />
            <ListItemText primary="Apellido" secondary ={dicCliente[clienteMostrar]["apellido"]} />
            <ListItemText primary="Estado" secondary ={dicCliente[clienteMostrar]["Estado"]} />
          </List>
        </Paper>

        {/* <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="customer"
            label="Cliente"
            name="customer"
            autoComplete="off"
            autoFocus
            className={classes.textField}
          />
        </form> */}
      </Grid>
      <Grid item xs={12} sm={7} md={7} component={Paper}></Grid>
      <Grid item xs={12} sm={3} md={3} component={Paper} square></Grid>
    </Grid>
  );
};

export default Pos;

