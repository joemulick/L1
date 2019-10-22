import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout'
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
        <div className={classes.testimonialContainer}>
          <TestimonialsOne />
        </div>
      </Layout>

    </div>
  );
}
