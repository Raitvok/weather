import React from 'react';

const Search = props => {
  return (
    <form id="pageSearch" className="header__form" onSubmit={props.myWeather}>
      <input className="header__form__input" type="text" placeholder="City" name="city"/>
      <button className="header__form__btn">Search</button>
    </form>
  )
};

export default Search;

