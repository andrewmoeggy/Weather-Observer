import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import Footer from './components/Footer';
import './App.css';

const API_KEY = '55550e48c7862436ebdca1ad1d4e2183';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('')
  const [tempurature, setTempurature] = useState('');  // in Kelvin
  const [tempMin, setTempMin] = useState('');  // in Kelvin
  const [tempMax, setTempMax] = useState('');  // in Kelvin
  const [humidity, setHumidity] = useState('');
  const [description, setDescription] = useState('')
  const [error, setError] = useState('');

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&APPID=${API_KEY}`);
    const data = await api_call.json();
    if (data.message === 'city not found') {
      setError('City not found, please try again');
    } else if (city) {
      setWeatherData(data);
      setCity(data.name);
      setTempurature(data.main.temp);
      setTempMin(data.main.temp_min);
      setTempMax(data.main.temp_max);
      setHumidity(data.main.humidity);
      setDescription(data.weather[0].description);
      setError('');
    } else {
      clearData();
      setError('Please enter your city');
    }
  }

  const clearData = () => {
    setWeatherData('');
    setCity('');
    setTempurature('');
    setTempMin('');
    setTempMax('');
    setHumidity('');
    setDescription('');
  }

  return (
    <div className="App">
      <div className="grid_top">
        <Title />
        <Form getWeather={getWeather} city={city} clearData={clearData} />
      </div>
      <div className="grid_bottom">
        <Weather
          weatherData={weatherData}
          city={city}
          tempurature={tempurature}
          humidity={humidity}
          description={description}
          error={error}
          tempMin={tempMin}
          tempMax={tempMax} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
