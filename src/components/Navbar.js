import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Link from '../components/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      minHeight: '10vh',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBarStyle: {
      background: 'transparent',
      boxShadow: 'none',
    },
    color: {
      color: '#000'
    }
  }));


export default function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarStyle} position="static">
        <Toolbar className={classes.color}>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
