import React, { Fragment } from 'react'
import WifiIcon from '@material-ui/icons/Wifi'
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    iconWifiGreen:{
      color:"green"
    },
    divider: {
        margin: 4
      },
      alignHorizontal: {
        display: "inline",
        width: '100%',
        fontSize: 10
      }
  }));

const StatusConnection = (props)=>{
    const {statusConnection} =props
    const classes = useStyles();
    return(
        <Fragment>
            <Typography  component="p" >  
                {"Estado de la conexion"}
            </Typography>
            <Divider className={classes.divider} />
            <Grid container className={classes.alignHorizontal}>
                <WifiIcon className={classes.iconWifiGreen}></WifiIcon>
              <Typography component="p">  
                {"Conectado"}
              </Typography>
            </Grid>
        </Fragment>
    )
}
export default StatusConnection