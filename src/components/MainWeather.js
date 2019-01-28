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
            {props.avgtemp && <p className="current__temperature --avgtemp">{Math.round(props.avgtemp) + "º"}</p>}
            {props.mintemp && props.maxtemp && <p className="current__temperature --temp">{Math.round(props.mintemp) + "º ... " + Math.round(props.maxtemp) + "º"}</p>}
         </div>
         <div className="current__description">
            <div className="current__description__left">
               {props.description_text && <p className="current__precipitation">Precipitation:</p>}
               {props.humidity && <p className="current__humidity">Humidity: </p>}
               {props.visible_km && <p className="current__precipitation">Visible:</p>}
            </div>
            <div className="current__description__right">
               {props.description_text && <p>{props.description_text}</p>}
               {props.humidity && <p>{props.humidity + " %"}</p>}
               {props.visible_km && <p>{props.visible_km + " km"}</p>}
            </div>
         </div>
      </div>
   )
};

export default MainWeather;