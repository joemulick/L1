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

const activeStyles = {
  color: 'red',
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: '1',
  },
  navStyle: {
    backgroundColor: '#fff',
  },
  logoStyle: {
    padding: '20px',
    flexGrow: '1',
  },
  logoImageStyle: {
    padding: '0 10px',
  },
  menuItemStyle: {
    padding: '38px 50px',
  },
  displayInlineBlock: {
    display: 'inline-block',
    verticalAlign: 'middle',
    paddingLeft: '25px',
  },
  leftAlignLogoAndText: {
    flexGrow: '1',
  },
  linkDecoration: {
    textDecoration: 'none',
    boxShadow: 'none',
  }

}));

export default function HideAppBar(props) {

  const classes = useStyles();

  return (
    <React.Fragment>

      <CssBaseline />
      <HideOnScroll {...props}>

        <AppBar className={classes.navStyle}>
          <Toolbar>

              <Link className={classes.logoImageStyle} to="/" color="primary">
                <img className={classes.displayInlineBlock} src={'https://res.cloudinary.com/ddsihrmda/image/upload/v1563164784/choice-ed-logo_id3h1x.png'} alt="Choice Educational Services Logo" />
              </Link>
              <div className={classes.leftAlignLogoAndText}>
                <Link to="/" color="primary" activeStyles={activeStyles}>              
                  <Typography className={classes.displayInlineBlock} variant="h6">Choice Educational Services</Typography>
                </Link>
              </div>

              <Link to="/about" className={classes.linkDecoration} color="primary">
                <Button className={classes.menuItemStyle}>About</Button>
              </Link>

              <Link to="/services" className={classes.linkDecoration} color="primary">
                <Button className={classes.menuItemStyle} >Services</Button>
              </Link>

              <Link  className={classes.linkDecoration} to="/resources" color="primary">
                <Button className={classes.menuItemStyle}>Resources</Button>
              </Link>

              <Link to="/contact" className={classes.linkDecoration} color="primary">
                <Button className={classes.menuItemStyle}>Contact</Button>
              </Link>

              <Link to="/blog" className={classes.linkDecoration} color="primary">
                <Button className={classes.menuItemStyle}>Blog</Button>
              </Link>
          </Toolbar>
        </AppBar>

      </HideOnScroll>
    </React.Fragment>
  );
}