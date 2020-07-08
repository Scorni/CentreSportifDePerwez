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
       
          <div>{children}</div>
       
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

const sportsTabs =[
  {
    "Sports individuels":[
      "Fitness",
      "Athlétisme"
    ],
    "Sports collectifs":[
      "Football",
      "Mini-Foot",
      "Handball",
      "Hockey",
      "Volley-ball"
    ],
    "Arts martiaux":[
      "Judo",
      "Taï-Jutsu",
      "Ju-Jutsu"
    ],
    "Sports de raquette":[
      "Badminton",
      "Tennis",
      "Tennis de table"
    ],
    "Gymnastique":[
      "Gymnastique"
    ],
    "Danse":[
      "Danse moderne",
      "Hip hop",
      "Step",
      "Biodanza"
    ],
    "MultiSports":[
      "Multisports"
    ]
  }
]

function objectSort(tabs,cat){
  var newList= [];
  var linkWithoutSpace;
  for (let index in tabs) {
    for(let value in tabs[index][cat]){
      linkWithoutSpace = (cat).replace(/\s+/g, '-')+"/"+ (tabs[index][cat][value]).replace(/\s+/g, '-');
      newList[value] = 
        <li key={tabs[index][cat][value]} style={{display:"inline-block",listStyle:"none",margin:"10px"}}>
          <Link  href={'/'+linkWithoutSpace}>
              <Button>{tabs[index][cat][value]}</Button>
          </Link>
        </li>
    }
  }
  return(newList)
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
    <div className={classes.root} style={{padding:"10px"}}>
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
        <TabPanel value={value} index={0} >
          {objectSort(sportsTabs,"Sports individuels")}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {objectSort(sportsTabs,"Sports collectifs")}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {objectSort(sportsTabs,"Arts martiaux")}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {objectSort(sportsTabs,"Sports de raquette")}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {objectSort(sportsTabs,"Gymnastique")}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {objectSort(sportsTabs,"Danse")}
        </TabPanel>
        <TabPanel value={value} index={6}>
          {objectSort(sportsTabs,"MultiSports")}
        </TabPanel>
      </div>
  );
}