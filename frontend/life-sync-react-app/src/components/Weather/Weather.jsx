import './styles.css';
import React, { useEffect, useState } from 'react';
import { apiFetch } from '../../apiFetch';

export default function Weather() {
  const [location, setLocation] = useState([]);
  const [weatherIconData, setWeatherIconData] = useState([]);
  const [weatherIconLink, setWeatherIconLink] = useState([]);
  const [temperature, setTemperature] = useState([]);

  useEffect(() => {
    apiFetch('http://ip-api.com/json/', 'GET', null).then((data) => {
      setLocation(data);
    });
  }, []);

  const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
  const apiWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${
    location.lat + ',' + location.lon
  }`;

  useEffect(() => {
    if (location.lat && location.lon) {
      apiFetch(apiWeatherUrl, 'GET', null).then((data) => {
        setTemperature(data.current.temp_c);
        setWeatherIconData(data.current.condition.icon);
        const weatherIconLink = weatherIconData.slice(
          20,
          weatherIconData.length,
        );
        setWeatherIconLink(weatherIconLink);
      });
    }
  }, [weatherIconData, location]);

  return (
    <div className="weather-component">
      {weatherIconLink.length > 0 && (
        <>
          <img
            src={weatherIconLink}
            className="weather-image"
            alt="weather-icon"
          />
          <h6 className="temperature">{temperature} °C</h6>
        </>
      )}
    </div>
  );
}
