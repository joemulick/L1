import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  window: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
  navStyle: {
    // backgroundColor: '#c2c2c2',
    // backgroundColor: 'transparent',
    backgroundColor: '#fff',
  },
  logoStyle: {
    padding: '20px',
    flexGrow: '1',
  },
  logoImageStyle: {
    padding: '0 10px'
  },
  menuItemStyle: {
    padding: '38px 50px',
  },
}));

export default function HideAppBar(props) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.navStyle}>
          <Toolbar>
            <img className={classes.logoImageStyle} src={'https://res.cloudinary.com/ddsihrmda/image/upload/v1563164784/choice-ed-logo_id3h1x.png'} alt="Choice Educational Services Logo" />
            <Typography className={classes.logoStyle} variant="h6">Choice Educational Services</Typography>
            <Button className={classes.menuItemStyle} color="inherit">Login</Button>
            <Button className={classes.menuItemStyle} color="inherit">Test1</Button>
            <Button className={classes.menuItemStyle} color="inherit">Test2</Button>
            <Button className={classes.menuItemStyle} color="inherit">Test3</Button>
            <Button className={classes.menuItemStyle} color="inherit">Test4</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}