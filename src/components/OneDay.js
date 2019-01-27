import React from "react";

const OneDay = (props) => {
   const array = [];
   for (let item of props.data[2]) {
      array.push(
         <div>
            <div>
               <div>{item.day}</div>
               <div>{item.dateDay}</div>
            </div>
            <div>
               <div>{item.avgtemp}</div>
               <div>{item.maxtemp}</div>
               <div>{item.mintemp}</div>
               <div>{item.description_text}</div>
            </div>
         </div>
      )
   }
   return array;
};

export default OneDay;