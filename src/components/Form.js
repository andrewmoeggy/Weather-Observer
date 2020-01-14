import React from 'react';

const Form = ({ getWeather }) => {

  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="city" />
      <button>Get Weather</button>
    </form>
  );
}

export default Form;