import React, {Component} from 'react';
import "../styles/index.css"

class Weather extends Component {
  render() {
    return (
      <article id="pageWeather">
        <p>temperature: {Math.round(this.props.temp) + "º"}</p>
        <p>humidity: {this.props.humidity + "%"}</p>
        <p>description: {this.props.description}</p>
      </article>
    )
  }
}

export default Weather;