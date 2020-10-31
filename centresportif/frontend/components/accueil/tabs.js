import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from "next/link";
import {Button} from "reactstrap";
import {  createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import {  
  Navbar,
  NavbarBrand,
  Nav,
  } from 'reactstrap';
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
      "Athletisme",
      "Boxe Anglaise"
    ],
    "Sports collectifs":[
      "Football",
      "Handball",
      "Volleyball"
    ],
    "Arts martiaux":[
      "Judo",
      "Taekwendo",
      "Jujutsu",
      "Kravmaga",
      "Aikido"
    ],
    "Sports de raquettes":[
      "Badminton",
      "Tennis",
      "Tennis de table"
    ],
    "Gymnastique":[
      "Musculation",
      "Relaxation"
    ],
    "Danse":[
      "Danse"
    ],
    "Multisports":[
      "Multisports"
    ],
    "Infrastructure":[
      "Interne",
      "Externe"
    ]
  }
]

function objectSort(tabs,cat){
  var newList= [];
  var linkWithoutSpace;
  for (let index in tabs) {
    for(let value in tabs[index][cat]){
      linkWithoutSpace = (cat).replace(/\s+/g, '')+"/"+ (tabs[index][cat][value]).replace(/\s+/g, '');
      newList[value] = 
        <li key={tabs[index][cat][value]} style={{display:"inline-block",listStyle:"none",margin:"10px"}}>
          <Link  href={'/sports/'+linkWithoutSpace}>
              <Button className="customButton">{tabs[index][cat][value]}</Button>
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
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[50],
      },
      secondary: {
        main: green[50],
      },
       }
     });
  return (
    <>
    <div>
      <Nav className="customNav" >
          <Navbar light expand="md"  >
              <NavbarBrand  style={{color: "white"}} >Clubs sportifs</NavbarBrand>
          </Navbar>
      </Nav>
    </div>
    <div className={classes.root} style={{padding:"10px"}}>
        <AppBar position="static" color="default">
        <ThemeProvider theme={theme}>
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            className="customTabs"
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
            <Tab label="Infrastructure" {...a11yProps(7)} />

            </Tabs>
            </ThemeProvider>
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
          {objectSort(sportsTabs,"Sports de raquettes")}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {objectSort(sportsTabs,"Gymnastique")}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {objectSort(sportsTabs,"Danse")}
        </TabPanel>
        <TabPanel value={value} index={6}>
          {objectSort(sportsTabs,"Multisports")}
        </TabPanel>
        <TabPanel value={value} index={7}>
          {objectSort(sportsTabs,"Infrastructure")}
        </TabPanel>
      </div>
      </>
  );
}