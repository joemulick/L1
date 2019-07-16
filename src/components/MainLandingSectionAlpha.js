import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import MuiLink from '@material-ui/core/Link';
// import Link from '../components/Link';



import mainLandingSectionAlphaStyles from "../styles/mainLandingSectionAlpha.module.scss"

const useStyles = makeStyles(theme => ({
  testStyle: {
    padding: '150px'
  }
}));


export default function App() {

  const classes = useStyles();

  return (
    <div className={mainLandingSectionAlphaStyles.greyImageOverlay}>
        <Container maxWidth="xl">  
          <div className={classes.testStyle}>
            TEST
          </div>
        </Container>
    </div>
  );
}
