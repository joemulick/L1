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

import aboutOneStyles from "../../styles/aboutOne.module.scss"

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));

  const styles = {
    tabSectionStyle: {
      padding: '0px',
    },
  };

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
    <div>
      <Container maxWidth="lg">
        <Grid container>
            <Grid item xs={12}>
              <div className={classes.root}>
                  <AppBar position="static">
                  <Tabs
                      variant="fullWidth"
                      value={value}
                      onChange={handleChange}
                      aria-label="nav tabs example"
                  >
                  <LinkTab label="About CES" {...a11yProps(0)} />
                  <LinkTab label="About Lisa" {...a11yProps(1)} />
                  </Tabs>
                  </AppBar>
                  <TabPanel value={value} index={0} className={classes.tabSectionStyle}>
                  <img height="auto" width="100%" className={aboutOneStyles.aboutCESImageStyle} src="https://res.cloudinary.com/ddsihrmda/image/upload/v1569177006/About-CES-Edit2-550_kkze5p.jpg" alt="About CES - Clients Laughing" />
                    <Grid container>
                      <Grid item xs={12} sm={9}>
                      <div>
                        <h2>About CES</h2>
                      </div>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                      <div>
                        <img height="auto" width="100%" className={aboutOneStyles.aboutCESImageStyle} src="https://res.cloudinary.com/ddsihrmda/image/upload/v1569178707/About-US-2PeopleLaughing-Edit3-2Column-Narrow_p1lxnk.jpg" alt="About CES - Clients Laughing" />
                      </div>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <h2>About Lisa</h2>
                    <img height="auto" src="https://res.cloudinary.com/ddsihrmda/image/upload/v1569175353/LisaPhotoOrig_br3gps.png" alt="Lisa Photo" />
                  </TabPanel>
                </div>
            </Grid>
      </Grid>
    </Container>
</div>
  );
}