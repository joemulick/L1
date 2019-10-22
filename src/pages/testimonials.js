import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

import TestimonialsOne from '../components/testimonialComponents/TestimonialsOne'


const useStyles = makeStyles(theme => ({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
    testimonialContainer: {
      paddingTop:'100px',
    },
  }));



export default function App() {

  const classes = useStyles();

  return (
    <div>
      <Layout>
        <Navbar />
        <div className={classes.testimonialContainer}>
          <TestimonialsOne />
        </div>
        <Footer />
      </Layout>

    </div>
  );
}
