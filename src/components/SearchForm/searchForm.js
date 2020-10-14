import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Skeleton from '@material-ui/lab/Skeleton';
import WeatherContainer from '../WeatherContainer/WeatherContainer';

import HomeButton from '../HomeButton/HomeButton';
import axios from 'axios';

class SearchForm extends Component {

    state = {
        weatherData: null,
        cityName: null, 
        loaded: false
    }

    render() {

        const setCityName = (e) => {
            this.setState({cityName: e.target.value});
        }
    
        const handleSubmit = (e) => {

            let city = this.state.cityName;
            e.preventDefault();
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f19f8b62b0603bb54132e4575a9a71db`)
            .then(res => {
                this.setState({weatherData: res.data, loaded: true});
                console.log(res.data);
            });
        }

        let skeleton = <div className="w-50">
                        <h4 className="text-center">Data will be displayed here</h4>
                    </div>;

        return(
            <div className="result-wrapper mb-4">
                <div className="formContainer mb-4">
                <h4 className="mb-4 w-75 text-center">In this page, you can search for over 200,000 cities around the world and check the weather</h4>
                    <form className="Form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <TextField id="standard-basic" label="City Name" onChange={setCityName}  />
                            <small id="emailHelp" className="form-text text-muted">Developer - Bassil H Alqadi</small>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 text-light">Check Weather</button>
                    </form>
                </div>
                {this.state.loaded ? (<WeatherContainer
                    location={this.state.weatherData.name}
                    temp={this.state.weatherData.main['temp']}
                    minTemp={this.state.weatherData.main['temp_min']}
                    maxTemp={this.state.weatherData.main['temp_max']}
                    description={this.state.weatherData.weather['0']['description']}
                    generalWeather={this.state.weatherData.weather['0']['main']}
                    humidity={this.state.weatherData.main['humidity']}
                    pressure={this.state.weatherData.main['pressure']}
                    wind={this.state.weatherData.wind['speed']}
                    icon={this.state.weatherData.weather['0']['icon']}
                />) : (skeleton)}
                <HomeButton />
            </div>
        ); 
    }
    
}

export default SearchForm;