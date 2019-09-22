import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    tabContainer: {
      
    },
    sectionContainer: {
      background: '#fff',
      width: '100vw'
  },
  }));

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

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.sectionContainer}>
      <Container maxWidth="lg">
        <Grid container>
            <Grid item xs={12}>
              <div>
                  About
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.root}>
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
                    Page One
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Page Two
                  </TabPanel>
                </div>
            </Grid>
      </Grid>
    </Container>
</div>
  );
}