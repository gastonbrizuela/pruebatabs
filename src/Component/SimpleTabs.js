import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ClearIcon from '@material-ui/icons/Clear';
import SimpleCard from './posDos'


function TabPanel(props) {
  const { children, value, index,...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    width: "95%"
  },
  icon: {
    fontSize: 20,
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: 5,
    marginRight: 5
  }
}));

export default function SimpleTabs(props) {
  const {tabs, handleClearTab} = props
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    console.log("nuevo value "+ newValue)
    setValue(newValue);
  }

  function handleOnClickRemove (tab){
    handleClearTab(tab)
  }

  return (  
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs  value={value} onChange={handleChange} aria-label="simple tabs example" variant="scrollable" textColor='primary' indicatorColor = "primary">
          {tabs.map(tab=>(
            <Tab value={tab.counter} icon={<ClearIcon className={classes.icon} onClick={() => handleOnClickRemove(tab.counter)}/>} key={tab.counter} label={tab.type +" "+(tab.counter+1)} {...a11yProps(tab.counter)} />
          ))
         }
        </Tabs>
      </AppBar>
      {tabs.map(tab=>(
        <TabPanel key={tab.counter} value={value} index={tab.counter}>
          {tab.type==='Facturacion'?<SimpleCard/>:
          tab.type==='Reporting'?"Reporting":
          tab.type==='inicio'?"inicio":null}
        </TabPanel>
          ))}
    </div>
  );
}