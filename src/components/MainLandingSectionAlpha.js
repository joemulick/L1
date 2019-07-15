import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import MuiLink from '@material-ui/core/Link';
import Link from '../components/Link';
import { motion } from "framer-motion"


import mainLandingSectionAlphaStyles from "../styles/mainLandingSectionAlpha.module.scss"

// const useStyles = makeStyles(theme => ({

// }));


export default function App() {

  // const classes = useStyles();

  return (
    <div className={mainLandingSectionAlphaStyles.greyImageOverlay}>
        <Container maxWidth="xl">  
        <motion.div
            animate={{ scale: 0.5, rotate: 180, opacity: 0.5 }}
            transition={{
              yoyo: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </Container>
    </div>
  );
}
