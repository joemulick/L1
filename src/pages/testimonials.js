import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Navbar from '../components/Navbar'


const useStyles = makeStyles(theme => ({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }));

export default function App() {

  return (
    <div>
      
    <Navbar />

    


    </div>
  );
}
