import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ClearIcon from '@material-ui/icons/Clear';
import SimpleCard from './Pos'


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
    setValue(newValue);
  }

  function handleOnClickRemove (tab){
    setValue(tab-1);
    console.log(tab-1);
    handleClearTab(tab)
  }

  return (  
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs  value={value} onChange={handleChange} aria-label="simple tabs example" variant="scrollable">
          {tabs.map(tab=>(
            <Tab icon={<ClearIcon className={classes.icon} onClick={() => handleOnClickRemove(tab)} key={tab}/>} key={tab} label={"Factura " + (tab+1)} {...a11yProps({tab})} />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map(tab=>(
        <TabPanel key={tab} value={value} index={tab}>
          {tab}
        </TabPanel>
          ))}
    </div>
  );
}