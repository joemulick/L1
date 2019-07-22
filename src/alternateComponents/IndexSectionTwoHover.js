import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SvgIcon from '@material-ui/core/SvgIcon';

import indexSectionTwoStyles from "../styles/indexSectionTwoHover.module.scss"
import { borderRadius } from '@material-ui/system';

import ScrollAnimation from 'react-animate-on-scroll';


function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  //   minHeight: '325px',
  //   background: '#fff',
  //   marginTop: '5vh',
  //   marginLeft: '5vw',
  //   marginRight: '5vw',
  //   borderRadius: '10px'
  // },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
    marginTop: '2%',
    width: 80,
    height: 80,
  },
  cardTitle: {
    //change this in the future
    marginTop: '4%',
  },
  cardText: {
    marginTop: '5%',
  },
  sectionTitle: {
    textAlign: 'center',
    marginTop: '7vh'  
  }

}));

export default function FullWidthGrid() {

  const classes = useStyles();

  return (
    <div className={indexSectionTwoStyles.sectionContainer}>
    <Container maxWidth="lg">
        <div className={classes.root}>
            <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <h1 className={classes.sectionTitle} >Services</h1>
                    </Grid>
                    <Grid item sm={12} md={6}>
                    <ScrollAnimation 
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'>
                        <div className={indexSectionTwoStyles.image}>
                          <div>
                            <LightBulbIcon className={classes.lightBulb} />
                            <h2 className={classes.cardTitle}>Advise Package</h2>
                            <p className={classes.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                          </div>
                        </div>
                    </ScrollAnimation>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScrollAnimation 
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'>
                        <div className={indexSectionTwoStyles.image}>
                          <div>
                            <LightBulbIcon className={classes.lightBulb} />
                            <h2 className={classes.cardTitle}>Advise Package</h2>
                            <p className={classes.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                          </div>
                        </div>
                        </ScrollAnimation>
                    </Grid> 
            </Grid>
        </div>
    </Container>
    </div>
  );
}