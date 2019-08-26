import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: '1',
    minHeight: '400px',
  },
  displayInlineBlockFooter: {
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '10px',
  },
  centerContent: {
    textAlign: 'center'
  },
}));

export default function HideAppBar(props) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container maxWidth="lg"> 
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >

            <Grid item xs>
              <div className={classes.centerContent}>
                <h1>Menu</h1>
                <h4>Home</h4>
                <h4>About</h4>
                <h4>What We Do</h4>
                <h4>Case Studies</h4>
                <h4>Contact</h4>
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.centerContent}>
                <h1>Contact Us</h1>
                <h4>12345 Caso Street</h4>
                <h4>Suite 200</h4>
                <h4>Thousand Oaks, CA 91360</h4>
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.centerContent}>
                <h1>Contact Us</h1>
                <div>
                  <img className={classes.displayInlineBlockFooter} src={'https://res.cloudinary.com/ddsihrmda/image/upload/v1563164784/choice-ed-logo_id3h1x.png'} alt="Choice Educational Services Logo" />
                  <img className={classes.displayInlineBlockFooter} src={'https://res.cloudinary.com/ddsihrmda/image/upload/v1563164784/choice-ed-logo_id3h1x.png'} alt="Choice Educational Services Logo" />
                </div>
                <div>
                <img className={classes.displayInlineBlockFooter} src={'https://res.cloudinary.com/ddsihrmda/image/upload/v1563164784/choice-ed-logo_id3h1x.png'} alt="Choice Educational Services Logo" />
                <img className={classes.displayInlineBlockFooter} src={'https://res.cloudinary.com/ddsihrmda/image/upload/v1563164784/choice-ed-logo_id3h1x.png'} alt="Choice Educational Services Logo" />
                </div>
              </div>
            </Grid> 

          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}