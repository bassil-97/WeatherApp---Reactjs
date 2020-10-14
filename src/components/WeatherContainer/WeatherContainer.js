import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';

function WeatherContainer(props) {

    var iconurl = "http://openweathermap.org/img/w/" + props.icon + ".png";
    var temp = Math.round(props.temp - 273.15);
    var minTemp = Math.round(props.minTemp - 273.15);
    var maxTemp = Math.round(props.maxTemp - 273.15);

    return(
        <div className="container w-100" id="result-wrapper">
            <h3 className="text-center">Weather Summary in {props.location}</h3>
            <div className="row my-4">
                <div className="col-lg-4">
                    <div className="item">
                        <h4 className="mb-2">General Weather</h4>
                        <img src={iconurl} className="img-fluid mb-2" />
                        
                        <span>
                            {props.generalWeather} - {props.description}
                        </span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <h4 className="mb-2"><img src="https://img.icons8.com/color/28/000000/hot.png"/> Tempreture</h4>
                        <h1>
                            {temp}°
                        </h1>
                    </div>
                </div>
                <div className="col-lg-4 text-danger">
                    <div className="item">
                        <h4><img src="https://img.icons8.com/cotton/28/000000/thermometer-down--v2.png"/> Min. Temp</h4>
                        <h1>
                            {minTemp}°
                        </h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 text-primary">
                    <div className="item">
                        <h4><img src="https://img.icons8.com/cotton/28/000000/thermometer-up--v2.png"/> Max. Temp</h4>
                        <h1>
                            {maxTemp}°
                        </h1>
                    </div>
                </div>
                <div className="col-lg-4 text-secondary">
                    <div className="item">
                        <h4><img src="https://img.icons8.com/fluent/28/000000/wet.png"/> Humidity</h4>
                        <h1>
                            {props.humidity}
                        </h1>
                    </div>
                </div>
                <div className="col-lg-4 text-secondary">
                    <div className="item">
                        <h4><img src="https://img.icons8.com/color/28/000000/pressure.png"/> Pressure</h4>
                        <h1>
                            {props.pressure}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherContainer;