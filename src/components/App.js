import React, {Component} from 'react';

import Header from "./Header";
import Weather from "./Weather";

import {AppRouting} from "./Nav"

import '../styles/App.css';

const API_KEY = "a006d87ff8a4eb3b5e480e9bf8cd5912";

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  async componentDidMount() {
    const city = "Minsk";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);

    const data = await api_call.json();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })

  }

  getWather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);

    const data = await api_call.json();
    console.log(data);
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  };


  render() {
    return (
      <main>
        <Header
          myWeather={this.getWather}
          city={this.state.city}
          country={this.state.country}/>
        <Weather
          temp={this.state.temp}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        <AppRouting />
      </main>
    );
  }
}

export default App;
