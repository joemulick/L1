import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import MuiLink from '@material-ui/core/Link';
import Link from '../components/Link';

import Navbar from '../components/Navbar'

import mainLandingSectionAlphaStyles from "../styles/mainLandingSectionAlpha.module.scss"

// const useStyles = makeStyles(theme => ({

// }));


export default function App() {

  // const classes = useStyles();

  return (
    <div className={mainLandingSectionAlphaStyles.greyImageOverlay}>
        <Container maxWidth="xl">
            <Navbar />  
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                Gatsby v4-beta example
                </Typography>
                <Link to="/about" color="secondary">
                Go to the about page
                </Link>
            </Box>
        </Container>
    </div>
  );
}
