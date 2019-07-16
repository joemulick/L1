import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import indexSectionTwoStyles from "../styles/indexSectionTwo.module.scss"
import { borderRadius } from '@material-ui/system';

import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '450px',
    background: '#fff',
    marginTop: '10vh',
    marginLeft: '5vw',
    marginRight: '5vw',
    borderRadius: '10px'
  },
}));

export default function FullWidthGrid() {

  const classes = useStyles();

  return (
    <div className={indexSectionTwoStyles.sectionContainer}>
    <Container maxWidth="lg"> 
        <div className={classes.root}>
            <Grid container spacing={3}>
                    <Grid item sm={12} md={6}>
                    <ScrollAnimation 
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'>
                        <div className={classes.paper}>xs=12 sm=6</div>
                    </ScrollAnimation>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScrollAnimation 
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'>
                        <div className={classes.paper}>xs=12 sm=6</div>
                        </ScrollAnimation>
                    </Grid> 
            </Grid>
        </div>
    </Container>
    </div>
  );
}