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
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    color: {
      color: '#000'
    },
    headroomStyle: {
      background: '#828282',
      boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
    }
  }));


export default function App(props) {

  const classes = useStyles();

  return (
        <div className={classes.root}>
            <AppBar className={classes.headroomStyle}>
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
