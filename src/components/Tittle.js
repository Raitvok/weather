import React from "react"
import "../styles/header.css"

const Tittle = (props) => (
  <div>
    <p>Weather forecast for</p>
    <p>{props.city},{props.country} </p>
  </div>
);

export default Tittle;