import React from "react";

const OneDay = (props) => {
   const array = [];
   for (let item of props.data[2]) {
      array.push(
         <div className="oneday">
            <div className="oneday__date">
               <div>{item.day}</div>
               <div>{item.dateDay}</div>
            </div>
            <div className="oneday__temperature --temp">
               <div className="oneday__description__temp --avgtempmin">{Math.round(item.avgtemp)}</div>
               <p className="oneday__description__temp --tempmin">{Math.round(item.mintemp) + "º ... " + Math.round(item.maxtemp) + "º"}</p>
            </div>
            <div className="oneday__description">{item.description_text}</div>
         </div>
      )
   }
   return array;
};

export default OneDay;