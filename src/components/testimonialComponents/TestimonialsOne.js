import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import Paper from '@material-ui/core/Paper';

function QuoteIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
    </SvgIcon>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: '1',
    backgroundColor: 'theme.palette.background.paper',
  },
  rootTwo: {
    flexGrow: '1',
    backgroundColor: 'theme.palette.background.paper',
    width: '60%',
    margin: 'auto',
  },
  tabContainer: {
    padding: '0 5vw'
  },
  testimonialContainer: {
    height: '300px',
    width: '70%',
    margin: 'auto',
    padding: '25px',
    backgroundColor: 'red',
    borderRadius: '25px',
    
  },
  quoteIcon: {
    fontSize: '50px'
  },
  userSig: {
    textAlign: 'right',
  },
  testimonialSpacing: {
    padding: '25px 50px',
  },
  testimonialMainText: {
    paddingBottom: '10px',
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <div className={classes.tabContainer}>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Paper className={classes.rootTwo}>
            <div className={classes.testimonialSpacing}>
              <Typography component="p" className={classes.testimonialMainText}>
              <QuoteIcon
              className={classes.quoteIcon}
              />
               Mrs. Allardyce was not only an amazing college counselor to me, but also a great mentor during my high school years. She offered a depth of expertise on the college admissions process. Because I was a student athlete, the college selection process presented unique layers of challenges, but she understood and guided me through each step of the application. I cannot emphasize enough her level of true wisdom! With extensive research, she answered every one of my questions; I was completely reassured. I would enter her office feeling stressed and apprehensive, and then I would leave with insightful answers and confidence. Her level of compassion about my well-being and future was evident in every encounter. I am so thankful for all of her help; I could not begin to imagine the process without Ms. Allardyce!
              </Typography>
              <Typography variant="subtitle1" align="right">
              –JORDAN, UNIVERSITY OF OREGON '14 
              </Typography>
            </div>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Paper className={classes.rootTwo}>
            <div className={classes.testimonialSpacing}>
              <Typography component="p" className={classes.testimonialMainText}>
              <QuoteIcon
              className={classes.quoteIcon}
              />
               Mrs. Allardyce was not only an amazing college counselor to me, but also a great mentor during my high school years. She offered a depth of expertise on the college admissions process. Because I was a student athlete, the college selection process presented unique layers of challenges, but she understood and guided me through each step of the application. I cannot emphasize enough her level of true wisdom! With extensive research, she answered every one of my questions; I was completely reassured. I would enter her office feeling stressed and apprehensive, and then I would leave with insightful answers and confidence. Her level of compassion about my well-being and future was evident in every encounter. I am so thankful for all of her help; I could not begin to imagine the process without Ms. Allardyce!
              </Typography>
              <Typography variant="subtitle1" align="right">
              –JORDAN, UNIVERSITY OF OREGON '14 
              </Typography>
            </div>
          </Paper>
        </TabPanel>
      </div>
    </div>
  );
}