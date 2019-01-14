import React from 'react';
import "../styles/weather.css"

/*TODO ---- rename component form current ----*/

const Weather = (props) => {
  return (
    <div className="current">

      <div className="block">
        {props.temp && <p className="current__temperature">{Math.round(props.temp) + "º"}</p>}
      </div>

      <div className="block">
        {props.humidity && <p className="current__humidity">Влажность: {props.humidity + "%"}</p>}
        {props.description && <p className="current__precipitation">Осадки: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
      </div>

    </div>
  )};

export default Weather;