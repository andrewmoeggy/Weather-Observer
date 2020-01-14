import React from 'react';

const Form = ({ getWeather }) => {

  return (
    <form class="form" onSubmit={getWeather}>
      <input class="form_input" type="text" name="city" placeholder="City" />
      <button class="btn">Get Weather</button>
    </form>
  );
}

export default Form;