import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-animate-on-scroll';

import mainLandingSectionAlphaStyles from "../../styles/mainLandingSectionAlpha.module.scss"




export default function App() {

  return (
    <div className={mainLandingSectionAlphaStyles.greyImageOverlay}>
        <Container maxWidth="xl">  
          <div className={mainLandingSectionAlphaStyles.mainTextDiv}>
            <ScrollAnimation duration="4" animateIn="fadeIn">
              <h4 className={mainLandingSectionAlphaStyles.mainFontStyle}>Empowering students through personalized and expertly guided college and financial aid strategies.</h4>
            </ScrollAnimation>
          </div>
        </Container>
    </div>
  );
}