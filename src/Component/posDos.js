import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
//import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import GridOnIcon from "@material-ui/icons/GridOn";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { green } from "@material-ui/core/colors";

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
  inputSearch: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "30%",
    margin: theme.spacing(3, 3, 1, 3)
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
  },
  spaceDivider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  card: {
    width: "95%",
    margin: theme.spacing(1, 1, 1, 1)
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  groupButtons: {
    display: "block"
  },
  paperTable: {
    marginTop: theme.spacing(3),
    width: "95%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
    alignSelf: "center",
    margin: "auto"
  },
  table: {
    width: "100%"
  },
  subTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(3)
  },
  payformButton: {
    margin: theme.spacing(1, 1, 1, 1),
    width: "80%"
  },
  alignButton: {
    textAlign: "center"
  },
  chipContent: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  },
  validateButton: {}
}));

function createProduct(name, quantity, price, discount) {
  return { name, quantity, price, discount };
}

const products = [
  createProduct("Loc. 161 x 60 ml.", 2, 160, 24),
  createProduct("Loc. 160 x 60 ml.", 3, 160, 37),
  createProduct("Loc. 129 x 30 ml.", 4, 87, 24),
  createProduct("Loc. 161 x 100 ml.", 2, 243, 67),
  createProduct("Loc. 150 x 30 ml.", 1, 87, 49)
];

function createPayForm(name) {
  return { name };
}

const payforms = [
  createPayForm("Efectivo ($)"),
  createPayForm("Efectivo (U$D)"),
  createPayForm("Visa"),
  createPayForm("Visa Electrón"),
  createPayForm("Maestro"),
  createPayForm("Mastercard"),
  createPayForm("Cabal"),
  createPayForm("Argencard"),
  createPayForm("Todo Pago"),
  createPayForm("Mercado Pago"),
  createPayForm("Cuenta Corriente"),
  createPayForm("Otros")
];

const GreenButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    },
    margin: theme.spacing(1, 1, 1, 1),
    width: "80%"
  }
}))(Button);

const Pos = () => {
  const classes = useStyles();

  function handleDelete() {
    alert("You clicked the delete icon.");
  }

  function handleClick() {
    alert("You clicked the Chip.");
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={2} md={2} >
        <Paper className={classes.formCustomer}>
          <InputBase
            className={classes.input}
            placeholder="Ingrese el Nombre o DNI"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton className={classes.iconButton} aria-label="search">
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
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Detalle del cliente
            </Typography>
            <Typography variant="h5" component="h2">
              {"Rodrigo Nicolás Mungo"}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {"Revendedor (Activo)"}
            </Typography>
            <Divider className={classes.spaceDivider} />
            <Typography variant="body2" component="p">
              {"Sucursal San Martín"}
            </Typography>
            <Typography variant="body2" component="p">
              {"Rosario 3713, San Andrés"}
            </Typography>
            <Typography variant="body2" component="p">
              {"rodrigomungo@gmail.com"}
            </Typography>
            <Typography variant="body2" component="p">
              {"011 15-6806-5208"}
            </Typography>
            <Divider className={classes.spaceDivider} />
            <Typography variant="body2" component="p">
              Mantiene la actividad en la campaña
            </Typography>
            <Typography variant="body2" component="p">
              {"Adeuda $ 56.7"}
            </Typography>
            <Typography variant="body2" component="p">
              {"Lleva gastado $ 651.5"}
            </Typography>
          </CardContent>
          <CardActions className={classes.groupButtons}>
            <Grid item xs={12} sm={12}>
              <Tooltip
                TransitionComponent={Zoom}
                title="El cliente pertenece a otra sucursal"
              >
                <Button
                  size="small"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Solicitar cambio de sucursal
                </Button>
              </Tooltip>
            </Grid>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Legales
            </Typography>
            <Typography variant="h5" component="h2">
              {"Factura B"}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {"Cuenta Corriente"}
            </Typography>
            <Typography variant="body2" component="p">
              {"Consumidor Final"}
            </Typography>
            <Typography variant="body2" component="p">
              {"DNI: 38.830.126"}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Acciones
            </Typography>
          </CardContent>
          <CardActions className={classes.groupButtons}>
            <Grid container direction="column">
              <Button
                size="small"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Liquidar empresaria
              </Button>
              <Button
                size="small"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Nota de crédito
              </Button>
              <Button
                size="small"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Cierre de caja
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={7}
        md={7}
        className={classes.alignTable}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Detalle del pedido
            </Typography>
            <Grid container direction="row" justify="space-between">
              <Paper className={classes.inputSearch}>
                <InputBase
                  className={classes.input}
                  placeholder="Código o nombre del artículo"
                  inputProps={{ "aria-label": "search item" }}
                />
                <IconButton
                  className={classes.iconButton}
                  aria-label="search item"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
              <Paper className={classes.inputSearch}>
                <InputBase
                  className={classes.input}
                  placeholder="Buscar precio"
                  inputProps={{ "aria-label": "search price" }}
                />
                <IconButton
                  className={classes.iconButton}
                  aria-label="search price"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Paper className={classes.paperTable}>
              <Table className={classes.table} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Precio Unitario</TableCell>
                    <TableCell align="right">Descuento</TableCell>
                    <TableCell align="right">Precio Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map(product => (
                    <TableRow key={product.name}>
                      <TableCell>
                        <Checkbox
                          defaultChecked
                          color="default"
                          value="checkedG"
                          inputProps={{
                            "aria-label": "checkbox with default color"
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {product.name}
                      </TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                      <TableCell align="right">{product.price}</TableCell>
                      <TableCell align="right">{product.discount}</TableCell>
                      <TableCell align="right">
                        {product.quantity * product.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Métodos de pago
            </Typography>
            <Grid container>
              {payforms.map(payform => (
                <Grid
                  item
                  xs={6}
                  className={classes.alignButton}
                  key={payform.name}
                >
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className={classes.payformButton}
                  >
                    {payform.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Pago
            </Typography>
            <Grid container className={classes.chipContent}>
              <Chip
                label="Efectivo ($): 500.00"
                onClick={handleClick}
                onDelete={handleDelete}
                className={classes.chip}
                color="primary"
              />
              <Chip
                label="Visa: 1221.00"
                onClick={handleClick}
                onDelete={handleDelete}
                className={classes.chip}
                color="primary"
              />
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container justify="center">
              <GreenButton
                size="small"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.validateButton}
              >
                Validar pago
              </GreenButton>
            </Grid>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Resumen
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Pos;

