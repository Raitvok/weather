import React, {Component} from 'react';

import Tittle from "./Tittle";
import Weather from "./Weather";
import Search from "./Search";

/*-----ROUTING---------TODO*/

import {AppRouting} from "./router/Navigation"

import '../styles/App.css';

import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import "../styles/navigation.css"

import Current from "./router/Current.component"
import OneDay from "./router/OneDay.component"
import ThreeDays from "./router/ThreeDays.component"

/*---------------*/

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

    if (city) {
      console.log(data);
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Enter current value"

      })
    }
  }

  render() {
    return (
      <main>

        <header id="pageHeader">
          <Search myWeather={this.getWather}/>
          <Tittle
            city={this.state.city}
            country={this.state.country}
          />
        </header>

        <article id="pageWeather">
          <Weather
            temp={this.state.temp}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </article>

        <footer id='pageFooter'>
          <div>
            where is footer
          </div>
        </footer>

      <navigation id="pageNav">

        <Router>
          <div>
            <div className="weather">
              <Link to="/">Current</Link>
              <Link to="/oneday">1 day</Link>
              <Link to="/threedays">3 days</Link>
            </div>
            <div>
              <Route exact path="/" component={Current}/>
              <Route path="/oneday" component={OneDay}/>
              <Route path="/threedays" component={ThreeDays}/>
            </div>
          </div>
        </Router>

      </navigation>

      </main>
    )
  }
}

export default App;
