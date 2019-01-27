import React from "react"

const MainCountryName = props => (
   <div className="country">
      {props.city && props.country && <p>{props.city} - {props.country}</p>}
      <image>{props.code}</image>
   </div>
);

export default MainCountryName;