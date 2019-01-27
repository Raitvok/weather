import React, {Component, Fragment} from 'react'
import HeaderLogo from "./HeaderLogo"
import HeaderSearch from "./HeaderSearch";
import MainCountryName from "./MainCountryName";
import MainWeather from "./MainWeather";
import Footer from "./Footer";
import {parsing} from "./service"
import '../styles/App.css';
import "../styles/pageHeader.css"


const APIXU_URL = "http://api.apixu.com/v1/forecast.json?key=";
const APIXU_KEY = "e43c959d9fab421dbab160905192001";
const DAYS = "7";

class App extends Component {
   state = {
      data: null,
      error: null
   };

   async componentDidMount() {
      const CITY = "Minsk";
      const api_call = await fetch(`${APIXU_URL}${APIXU_KEY}&q=${CITY}&days=${DAYS}`);
      const api_weather = await api_call.json();

      this.setState({
         data: parsing(api_weather)
      });
   }

//TODO здесь есть проблема, не отсылает запрос в srvice

   getWather = async (e) => {
      e.preventDefault();
      const CITY = e.target.elements.city.value;

      const api_call = await fetch(`${APIXU_URL}${APIXU_KEY}&q=${CITY}&days=${DAYS}`);

      if (CITY) {
         const api_weather = await api_call.json();
         this.setState({
            data: parsing(api_weather)
         })
      }
   };

   render() {
      if (!this.state.data) {
         return  (
            <h1>Loading...</h1>
         )} else {
      return (
         <Fragment>

            <header className="pageHeader">

               <HeaderLogo/>
               <HeaderSearch myWeather={this.getWather}/>

            </header>

            <main className="pageMain">

               <MainCountryName
                  city={this.state.data[0].city}
                  country={this.state.data[0].country}
                  code={this.state.data[1].description_code}
               />

               <MainWeather
                  day={this.state.data[1].day}
                  dateDay={this.state.data[1].dateDay}
                  avgtemp={this.state.data[1].avgtemp}
                  maxtemp={this.state.data[1].maxtemp}
                  mintemp={this.state.data[1].mintemp}
                  humidity={this.state.data[1].humidity}
                  description_text={this.state.data[1].description_text}
               />

            </main>

            <Footer className="pageFooter"/>
         </Fragment>
      )
   }
   }
}

export default App;