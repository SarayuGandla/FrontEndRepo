import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FindWeather = () => {  // Change 'weather' to 'Weather'
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '51afbd024f4cd24116941ad5e804b538'; // 🔑 Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city');
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
      } else {
        setWeather({
          name: data.name,
          temp: data.main.temp,
          desc: data.weather[0].description,
          humidity: data.main.humidity,
          wind: data.wind.speed,
        });
        setError('');
      }
    } catch {
      setError('Something went wrong');
      setWeather(null);
    }
  };

  return (
    <div className="container-fluid min-vh-100 bg-dark text-light d-flex flex-column align-items-center justify-content-center">
      <h2 className="mb-4">🌌 Weather App</h2>

      <div className="input-group mb-3 w-75 w-md-50">
        <input
          type="text"
          className="form-control bg-secondary text-light border-0"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-outline-light" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>

      {error && (
        <div className="alert alert-danger w-75 text-center">{error}</div>
      )}

      {weather && (
        <div className="card bg-secondary text-light mt-4 w-75 shadow-lg">
          <div className="card-body">
            <h4 className="card-title">{weather.name}</h4>
            <p className="card-text">🌡 Temperature: {weather.temp}°C</p>
            <p className="card-text">☁️ Description: {weather.desc}</p>
            <p className="card-text">💧 Humidity: {weather.humidity}%</p>
            <p className="card-text">🌬 Wind Speed: {weather.wind} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindWeather;  // Ensure you export 'Weather' (capitalized)
