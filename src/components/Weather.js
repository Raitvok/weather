import React from 'react';
import "../index.css"

const Weather = (props) => {
  return (
    <div>
      {props.temp && <p>temperature: {Math.round(props.temp) + "º"}</p>}
      {props.humidity && <p>humidity: {props.humidity + "%"}</p>}
      {props.description && <p>description: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  )};

export default Weather;