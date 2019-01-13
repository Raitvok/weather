import React, {Component} from "react"
import "../styles/header.css"

class Header extends Component {

  render() {
    return (
      <header onSubmit={this.props.myWeather} id="pageHeader">

        <form className="header__form">
          <input className="header__form__input" type="text" placeholder="City" name="city"/>
          <button className="header__form__btn">Search</button>
        </form>

        <div>
          <p className="header__title">Weather forecast for</p>
          <p className="header__title --location">{this.props.city},{this.props.country} </p>
        </div>

      </header>
    );
  }
};

export default Header;