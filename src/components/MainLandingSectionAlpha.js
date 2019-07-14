import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import MuiLink from '@material-ui/core/Link';
import Link from '../components/Link';

import Navbar from '../components/Navbar'

import mainLandingSectionAlphaStyles from "../styles/mainLandingSectionAlpha.module.scss"

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBarStyle: {
      background: 'transparent',
      boxShadow: 'none'
    },
    color: {
      color: '#000'
    },
    mainGrid: {
        minHeight: '100vmin',
        width: 'auto',
        bgcolor: 'rgba(255, 0, 0, 0.7)',
        background:'url(https://res.cloudinary.com/ddsihrmda/image/upload/v1563080797/nature_edit_szwgdl.png)',
        position: 'relative',
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover',
      }
  }));


export default function App() {

  const classes = useStyles();

  return (
    <div>
        <Container className={classes.mainGrid} maxWidth="xl">
          <div className={mainLandingSectionAlphaStyles.greyImageOverlay}>
            <Navbar />  
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                Gatsby v4-beta example
                </Typography>
                <Link to="/about" color="secondary">
                Go to the about page
                </Link>
            </Box>
          </div>
        </Container>
    </div>
  );
}
