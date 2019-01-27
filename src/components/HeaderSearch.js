import React from 'react'

const HeaderSearch = (props) => {
   return (
         <form className="header__search" onSubmit={props.myWeather}>
            <input className="header__search__input" type="text" placeholder="City" name="city"/>
         </form>
   )
};

export default HeaderSearch;

