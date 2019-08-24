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
    maxHeight: '70vh'
  },
  rootTwo: {
    flexGrow: '1',
    backgroundColor: 'theme.palette.background.paper',
    width: '60%',
    margin: '45px auto',
  },
  tabContainer: {
    padding: '0 5vw',
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

export default function TestimonialTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>

      <div className={classes.tabContainer}>
        <AppBar position="static" >
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Testimonials" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="Admissions" href="/trash" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className={classes.tabContainerHeight}>
        <Paper className={classes.rootTwo}>
            <div className={classes.testimonialSpacing}>
              <Typography component="p" className={classes.testimonialMainText}>
              <QuoteIcon
              className={classes.quoteIcon}
              />
               Ms. Allardyce made the time to really get to know my daughter and to help her make good choices about the schools she applied to. She was available to my daughter and I through formal appointments and impromptu check-ins. Ms. Allardyce's calm expertise made us feel confident that we were putting our efforts into the tasks that would bring the best outcome. She spent many hours with us reviewing essays for impact and accuracy, narrowing down school choices as well as supporting us in our communications with the high school administration. Having spent several years working with students in the college preparatory environment, Ms. Allardyce knew just how to communicate clearly and constructively with my daughter and our entire family. Her professionalism was evident in all aspects of our interactions as she relayed information about each and every university and what their admissions officers might be looking for in the incoming class. 
              </Typography>
              <Typography variant="subtitle1" align="right">
              –ROSEMARY, USC ‘16 PARENT
              </Typography>
            </div>
          </Paper>
        <Paper className={classes.rootTwo}>
            <div className={classes.testimonialSpacing}>
              <Typography component="p" className={classes.testimonialMainText}>
              <QuoteIcon
              className={classes.quoteIcon}
              />
               Thanks to Lisa Allardyce and Choice Educational Services, I was always ahead of the game in the college process, compared to my classmates. I really appreciate all the hard work she put in to make my college success a priority. She was so helpful and informative that I would recommend her services to any student looking for an edge in the college process!
              </Typography>
              <Typography variant="subtitle1" align="right">
              –HENNA, UC BERKELEY ‘16 
              </Typography>
            </div>
          </Paper>
          <Paper className={classes.rootTwo}>
            <div className={classes.testimonialSpacing}>
              <Typography component="p" className={classes.testimonialMainText}>
              <QuoteIcon
              className={classes.quoteIcon}
              />
               Dear Parents of Future College Students, We are happy to recommend Lisa Allardyce and Choice Educational Services. Our experience with the resources the high school provided and all of the college selection sites we used were overwhelming. We contacted Lisa and she was able to use our criteria to provide a binder with over 20 schools. The relevant information for each school was all there and we were able to refine our choices into nine schools to apply to. During this time, Lisa was working with our daughter, coaching her and directing her to accumulate the resume and letters of recommendation and essays necessary for the various applications. This was one of the most helpful aspects of Lisa’s service. Lisa set up a relationship with our daughter that helped her confidence and encouraged her to do better, acknowledging her strengths and gently guiding her to overcome areas that challenged her. The applications were sent, the acceptance letters arrived and we narrowed our choices down to five schools that we went to visit during the Easter break. Each of them would have been excellent schools, the unanimous choice was a perfect fit. I cannot detail all of the moments in this process that Lisa helped with. I will just tell you that she was the right person at the right time and now a part of our family story.
              </Typography>
              <Typography variant="subtitle1" align="right">
              –BLAIR AND SHANA, ART INSTITUTE OF BOSTON ’16 PARENTS 
              </Typography>
            </div>
          </Paper>
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
          <Paper className={classes.rootTwo}>
            <div className={classes.testimonialSpacing}>
              <Typography component="p" className={classes.testimonialMainText}>
              <QuoteIcon
              className={classes.quoteIcon}
              />
               You offered unparalleled guidance and support throughout my college application process. Your indispensible expertise transformed what would have been a stressful experience into a journey of self-discovery. The amount of compassion, warmth, and knowledge you have is truly rare. It was a distinct privilege to work with you. I wouldn’t trust my college application with anyone else. With deep gratitude, I give you my absolute highest recommendation.
              </Typography>
              <Typography variant="subtitle1" align="right">
              –AMY, CAL POLY ‘14
              </Typography>
            </div>
          </Paper>
          
        </TabPanel>
        {/* |||||||||||||||  TAB PANEL 2 ||||||||||||||||| */}
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