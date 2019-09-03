import React, {useState,Fragment} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(1),
    },
    menu: {
      width: 150,
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
  }));

function CustomerForm(){
    const [cliente, modificarCliente] = useState()
    const classes = useStyles();
    return(
    <form>
        <h2>Cliente</h2>
        <Grid container>
            <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            />
            <Button variant="outlined" color="primary" className={classes.button}>
                Buscar
            </Button>
        </Grid>
    </form>)
}

export default CustomerForm