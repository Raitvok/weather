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
            <div className="oneday__description">
               <div className="oneday__description --temp">
                  <div className="oneday__description__temp --avgtempmin">{Math.round(item.avgtemp)}</div>
                  {item.mintemp && item.maxtemp && <p className="oneday__description__temp --tempmin">{Math.round(item.mintemp) + "º ... " + Math.round(item.maxtemp) + "º"}</p>}
               </div>
               <div>{item.description_text}</div>
            </div>
         </div>
      )
   }
   return array;
};

export default OneDay;