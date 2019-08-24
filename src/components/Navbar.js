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
import Link from '../components/Link';

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
    backgroundColor: '#fff',
  },
  logoStyle: {
    padding: '20px',
    flexGrow: '1',
  },
  logoImageStyle: {
    padding: '0 10px',
    flexGrow: '1',
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

              <Link to="/" color="primary">
                <img className={classes.logoImageStyle} src={'https://res.cloudinary.com/ddsihrmda/image/upload/v1563164784/choice-ed-logo_id3h1x.png'} alt="Choice Educational Services Logo" />
              </Link>

              <Link to="/" color="primary">
                <Typography className={classes.logoStyle} variant="h6">Choice Educational Services</Typography>
              </Link>

              <Link to="/services" color="primary">
                <Button className={classes.menuItemStyle}>Services</Button>
              </Link>

              <Link to="/testimonials" color="primary">
                <Button className={classes.menuItemStyle}>Testimonials</Button>
              </Link>

              <Link to="/about" color="primary">
                <Button className={classes.menuItemStyle}>About</Button>
              </Link>

              <Link to="/contact" color="primary">
                <Button className={classes.menuItemStyle}>Contact</Button>
              </Link>

              <Link to="/blog" color="primary">
                <Button className={classes.menuItemStyle}>Blog</Button>
              </Link>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}