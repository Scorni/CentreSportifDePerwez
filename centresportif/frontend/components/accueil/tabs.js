import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from "next/link";
import {Button} from "reactstrap";
import { Chip } from '@material-ui/core';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
const individualSports =[
    "Fitness",
    "Athlétisme"
]
const collectiveSports =[
    "Football",
    "Mini-Foot",
    "Handball",
    "Hockey",
    "Volley-ball"
]
const martialArts =[
    "Judo",
    "Taï-Jutsu",
    "Ju-Jutsu"
]
const racketSports=[
    "Badminton",
    "Tennis",
    "Tennis de table"
]
const gymnastic =[
    "Gymnastique"
]
const dance =[
    "Danse moderne",
    "Hip hop",
    "Step",
    "Biodanza"
]
const multiSports=[
    "Multisports"
]
function addSports(type){

    if(type){
        var newList = [];
        for(let i =0;i < type.length;i++){
            newList[i] =
                        <li key={i} style={{float:"left",listStyle:"none",margin:"10px"}}>
                            <Link  href='/creation'>
                                <Button>{type[i]}</Button>
                            </Link>
                        </li>
        }
    }
    return newList;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            >
            <Tab label="Sports Individuels" {...a11yProps(0)} />
            <Tab label="Sports Collectifs" {...a11yProps(1)} />
            <Tab label="Arts Martiaux" {...a11yProps(2)} />
            <Tab label="Sports de raquette" {...a11yProps(3)} />
            <Tab label="Gymnastique" {...a11yProps(4)} />
            <Tab label="Danse" {...a11yProps(5)} />
            <Tab label="Multisports" {...a11yProps(6)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            {addSports(individualSports)}
        </TabPanel>
        <TabPanel value={value} index={1}>
            {addSports(collectiveSports)}
        </TabPanel>
        <TabPanel value={value} index={2}>
            {addSports(martialArts)}
        </TabPanel>
        <TabPanel value={value} index={3}>
            {addSports(racketSports)}
        </TabPanel>
        <TabPanel value={value} index={4}>
            {addSports(gymnastic)}
        </TabPanel>
        <TabPanel value={value} index={5}>
            {addSports(dance)}
        </TabPanel>
        <TabPanel value={value} index={6}>
            {addSports(multiSports)}
        </TabPanel>
    </div>
  );
}