import React, {Component} from 'react';

import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

import './App.css';

const API_KEY = "a006d87ff8a4eb3b5e480e9bf8cd5912";

class App extends Component {
    getWather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
        // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=53.9&lon=27.5667&APPID=a006d87ff8a4eb3b5e480e9bf8cd5912`);

        const data = await api_call.json();
        console.log(data);
    }


    render() {
        return (
            <div>
                <Header/>
                <Form getWeather = {this.getWather} />
                <Weather/>
            </div>
        );
    }
}

export default App;
