import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  mainFormContainer: {
    margin: 'auto',
  },
}));



export default function TextFields() {

  const classes = useStyles();
  
  return (
    <div className={classes.mainFormContainer}>
        <form className={classes.container} noValidate autoComplete="off">
        
        <TextField
            id="standard-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
        />
        
        <TextField
            id="standard-search"
            label="Search field2"
            type="search"
            className={classes.textField}
            margin="normal"
        />

        <TextField
            id="standard-search"
            label="Search field3"
            type="search"
            className={classes.textField}
            margin="normal"
        />
        </form>
    </div>
  );
}