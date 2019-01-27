import React from "react"

const MainCountryName = props => (
   <div className="pageCountry">
      <p>{props.city} - {props.country}</p>
   </div>
);

export default MainCountryName;