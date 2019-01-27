import React from 'react';
import "../styles/MainWeather.css"

const MainWeather = (props) => {
   return (
      <div className="current">
         <div className="current__date">
            {props.dateDay && <p>{props.dateDay}</p>}
            {props.day && <p>{props.day}</p>}
         </div>
         <div className="current__temperature">
            {props.avgtemp && <p>{Math.round(props.avgtemp) + "º"}</p>}
            {props.mintemp && props.maxtemp && <p>{props.mintemp + "º ... " + props.maxtemp + "º"}</p>}
         </div>
         <div className="current__description">
            {props.humidity && <p className="current__humidity">humidity: {props.humidity + "%"}</p>}
            {props.description_text && <p className="current__precipitation">precipitation: {props.description_text}</p>}
         </div>
      </div>
   )
};

export default MainWeather;