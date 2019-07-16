import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-animate-on-scroll';

import mainLandingSectionAlphaStyles from "../styles/mainLandingSectionAlpha.module.scss"

const useStyles = makeStyles(theme => ({
  myAnimation: {
  animationDuration: '5s',
  animationDelay: '5s',
  }
}));


export default function App() {

  const classes = useStyles();

  return (
    <div className={mainLandingSectionAlphaStyles.greyImageOverlay}>
        <Container maxWidth="xl">  
          <ScrollAnimation duration="6" animateIn="fadeIn">
            <h1 className={mainLandingSectionAlphaStyles.myAnimation}>Some Text</h1>
            <h1 className={mainLandingSectionAlphaStyles.myAnimation}>Some Text</h1>
            <h1 className={mainLandingSectionAlphaStyles.myAnimation}>Some Text</h1>
            <h1 className={mainLandingSectionAlphaStyles.myAnimation}>Some Text</h1>
            <h1 className={mainLandingSectionAlphaStyles.myAnimation}>Some Text</h1>
            <h1 className={mainLandingSectionAlphaStyles.myAnimation}>Some Text</h1>
            <h1 className={mainLandingSectionAlphaStyles.myAnimation}>Some Text</h1>
          </ScrollAnimation>
        </Container>
    </div>
  );
}