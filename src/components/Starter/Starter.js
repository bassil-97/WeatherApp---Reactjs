import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import OpacityIcon from '@material-ui/icons/Opacity';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import anime from 'animejs';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 36,
    }
}));

function Starter(props) {

    const classes = useStyles();

    useEffect(() => {
        setTimeout(function(){ 
          anime({
            targets: '.cloud',
            translateX: 1366,
            duration: 3000,
            easing: 'easeInOutSine',
          });
         }, 3000);
      });

    return(
        <div className={classes.root}>
            <img src="https://img.icons8.com/cotton/64/000000/partly-cloudy-day--v1.png" className="cloud mt-4" />
            <h4 className="display-4 text-center">Welcome to My Weather App</h4>
            <p className="text-muted text-center mb-4">Here you can search for your location to find out how is the weather.</p>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="box">
                        <FilterDramaIcon fontSize="large" />
                        <h5 className="mt-3">Access current weather data for any location including over 200,000 cities</h5>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="box">
                        <OpacityIcon fontSize="large" />
                        <h5 className="mt-3">Hourly forecast is available for 4 days</h5>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="box">
                        <AcUnitIcon fontSize="large" />
                        <h5 className="mt-3">Forecast weather data for 96 timestamps</h5>
                    </div>
                </div>
            </div>
            <div className="row mt-4 justify-content-center">
                <Button variant="contained" color="primary">
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/searchForm">Check the weather in your place</Link>
                </Button>
            </div>
        </div>
    );
}

export default Starter;