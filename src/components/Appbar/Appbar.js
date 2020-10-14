import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloudIcon from '@material-ui/icons/Cloud';

import Toggler from '../Toggler/Toggler';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 64
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 4
  },

}));



export default function ButtonAppBar(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <CloudIcon />
          <Typography variant="h6" className={classes.title}>
            My Weather App
          </Typography>
          <Toggler clicked={props.themeToggler} mode={props.mode} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
