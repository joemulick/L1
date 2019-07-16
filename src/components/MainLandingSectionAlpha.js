import React from 'react';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import MuiLink from '@material-ui/core/Link';
// import Link from '../components/Link';
import { withStyles } from '@material-ui/core/styles';

import mainLandingSectionAlphaStyles from "../styles/mainLandingSectionAlpha.module.scss"

const styles = {

};

class MainLandingSectionAlpha extends React.Component {
  render() {
    return (
      <div className={mainLandingSectionAlphaStyles.greyImageOverlay}>
        <Container maxWidth="xl">  
          <div className={mainLandingSectionAlphaStyles.test}>
            TEST
          </div>
        </Container>
    </div>
    );
  }
}


export default withStyles(styles)(MainLandingSectionAlpha);