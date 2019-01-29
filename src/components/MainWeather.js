import React from 'react';
import "../styles/MainWeather.css"

const MainWeather = (props) => {
   return (
      <div className="current">
         <div className="current__date">
            {props.day && <p className="current__date --day">{props.day}</p>}
            {props.dateDay && <p className="current__date --date">{props.dateDay}</p>}
         </div>
         <div className="current__temperature">
            <p className="current__temperature --avgtemp">{Math.round(props.avgtemp)}</p>
            <p className="current__temperature --temp">{Math.round(props.mintemp) + "º ... " + Math.round(props.maxtemp) + "º"}</p>
         </div>
         <div className="current__description">
            <div className="current__description__left">
               {props.description_text && <p className="current__precipitation">Precipitation:</p>}
               {props.humidity && <p className="current__humidity">Feelslike: </p>}
               {props.feelslike && <p>Humidity: </p>}
{/*
               {props.cloud && <p className="current__cloud">Cloud: </p>}
*/}
               {props.visible_km && <p className="current__precipitation">Visible:</p>}
            </div>
            <div className="current__description__right">
               {props.description_text && <p>{props.description_text}</p>}
               {props.feelslike && <p>{props.feelslike}</p>}
               {props.humidity && <p>{props.humidity + " %"}</p>}
{/*
               {props.cloud && <p>{props.cloud + " %"}</p>}
*/}
               <p>{props.visible_km + " km"}</p>
            </div>
         </div>
      </div>
   )
};

export default MainWeather;