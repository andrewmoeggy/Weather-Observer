import React from 'react';

const Weather = ({ weatherData, city, tempurature, tempMin, tempMax, description, humidity, error }) => {
  console.log(weatherData)

  const formatTemp = (kelvinTemp) => {
    return ((kelvinTemp - 273.15) * (9 / 5) + 32).toFixed(2);
  }

  return (
    <>
      {city && <p>Location: {city}</p>}
      {tempurature && <p>Tempurature: {formatTemp(tempurature)} &deg; F</p>}
      {description && <p>Conditions: {description}</p>}
      {humidity && <p>Humidity: {humidity} %</p>}
      {tempMin && tempMax && <><p>Today's min: {formatTemp(tempMin)} &deg; F</p> <p>Today's max: {formatTemp(tempMax)} &deg; F</p></>}
      {error && <p>{error}</p>}
    </>
  );
}

export default Weather;