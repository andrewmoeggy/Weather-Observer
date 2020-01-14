import React from 'react';
import { WiGaleWarning, WiThermometer, WiCloud, WiHumidity, WiDirectionUp } from 'react-icons/wi';

const Weather = ({ weatherData, city, tempurature, tempMin, tempMax, description, humidity, error }) => {
  console.log(weatherData)

  const formatTemp = (kelvinTemp) => {
    return ((kelvinTemp - 273.15) * (9 / 5) + 32).toFixed(2);
  }

  return (
    <div className="weather">
      {city &&
        <p><WiGaleWarning className="weather_icon" />
          Location:
          <span className="weather_data">{city}</span>
        </p>}
      {description &&
        <p><WiCloud className="weather_icon" />
          Conditions:
          <span className="weather_data"> {description}</span>
        </p>}
      {tempurature &&
        <p><WiThermometer className="weather_icon" />
          Tempurature:
          <span className="weather_data">{formatTemp(tempurature)} &deg; F</span>
        </p>}

      {humidity &&
        <p><WiHumidity className="weather_icon" />
          Humidity:
          <span className="weather_data">{humidity} %</span>
        </p>}
      {tempMin && tempMax &&
        <>
          <p><WiDirectionUp className="weather_icon" />
            Today's max:
            <span className="weather_data">{formatTemp(tempMax)} &deg; F</span>
          </p>
          <p><WiDirectionUp className="weather_icon rotate" />
            Today's min:
            <span className="weather_data">{formatTemp(tempMin)} &deg; F</span>
          </p>
        </>
      }

      {error &&
        <p className="error">{error}</p>}
    </div>
  );
}

export default Weather;