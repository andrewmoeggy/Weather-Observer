import React from 'react';

const Form = ({ getWeather, city, clearData }) => {

  return (
    <>
      <form class="form" onSubmit={getWeather}>
        <input class="form_input" type="text" name="city" placeholder="City" />
        <button class="btn">Get Weather</button>
      </form>
      {city ? <button className="clear-btn" onClick={clearData}>Clear</button> :
        <button className="transparent">Clear</button>}
    </>
  );
}

export default Form;