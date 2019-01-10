import React, {Component} from 'react';

import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

import './App.css';

const API_KEY = "a006d87ff8a4eb3b5e480e9bf8cd5912";

class App extends Component {
    state = {
        temp: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };
    getWather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
        // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=53.9&lon=27.5667&APPID=a006d87ff8a4eb3b5e480e9bf8cd5912`);

        const data = await api_call.json();
        console.log(data);
        this.setState({
            temp: data.main.temp,
            city: data.name,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        })
    };

    render() {
        return (
            <div>
                <Header/>
                <Form getWeather={this.getWather}/>
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}

                />
            </div>
        );
    }
}

export default App;
