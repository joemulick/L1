import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';

import ScrollableAnchor from 'react-scrollable-anchor';

import ServiceModalOne from '../serviceModals/ServiceModalOne';
import ServiceModalTwo from '../serviceModals/ServiceModalTwo';

import indexSectionTwoStyles from "../../styles/indexSectionTwoModal.module.scss"

import ScrollAnimation from 'react-animate-on-scroll';


function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

const styles = {
  paper: {
    textAlign: 'center',
    minHeight: '325px',
    background: '#fff',
    margin: '5vh 5vw',
    borderRadius: '10px'
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginTop: '2%',
    width: 80,
    height: 80,
  },
  cardTitle: {
    //change this in the future
    marginTop: '4%',
  },
  cardText: {
    marginTop: '5%',
  },
  sectionTitle: {
    textAlign: 'center',
    marginTop: '10vh',
    fontFamily: 'Helvetica',
    fontSize: '3em',
  }
};

class IndexSectionTwoModal extends React.Component {

  state = {
    openOne: false,
    openTwo: false,
    // openThree: false,

  };

  handleClickOpenOne = () => {
    this.setState({
      openOne: true,
    });
  };
  handleClickOpenTwo = () => {
    this.setState({
      openTwo: true,
    });
  };
  // handleClickOpenThree = () => {
  //   this.setState({
  //     openThree: true,
  //   });
  // };
  

  handleCloseOne = valueOne => {
    this.setState({ openOne: false });
  };
  handleCloseTwo = valueTwo => {
    this.setState({ openTwo: false });
  };
  // handleCloseThree = valueThree => {
  //   this.setState({ openThree: false });
  // };
  

  render() {

    const { classes, onClose, selectedValue, ...other } = this.props;

    return (

    <div className={indexSectionTwoStyles.sectionContainer}>
    <ScrollableAnchor id={'services'}><span></span></ScrollableAnchor>
    <Container maxWidth="lg">
            <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <h1 className={classes.sectionTitle} >Core Services</h1>
                    </Grid>
                    <Grid item sm={12} md={6}>
                    <ScrollAnimation 
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'>
                        <div className={classes.paper}>
                            <LightBulbIcon className={classes.lightBulb} />
                            <h2 className={classes.cardTitle}>Advise Package</h2>
                            <p className={classes.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                            <Button variant="outlined" onClick={this.handleClickOpenOne}>
                                learn more
                                </Button>
                                <ServiceModalOne
                                open={this.state.openOne}
                                onClose={this.handleCloseOne}
                              />
                        </div>
                    </ScrollAnimation>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <ScrollAnimation 
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'>
                        <div className={classes.paper}>
                            <LightBulbIcon className={classes.lightBulb} />
                            <h2>Transfer Package</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                            <Button variant="outlined" onClick={this.handleClickOpenTwo}>
                                learn more
                                </Button>
                                <ServiceModalTwo
                                open={this.state.openTwo}
                                onClose={this.handleCloseTwo}
                              />
                        </div>
                        </ScrollAnimation>
                    </Grid> 
            </Grid>
    </Container>
    </div>
    );
  }
}

IndexSectionTwoModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexSectionTwoModal);