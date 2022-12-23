import './styles.css';
import React, { useState, useEffect } from "react";

export default function QuoteComponent() {

  const API_KEY =`${process.env.REACT_APP_WEATHER_API_KEY}`

  const [weatherIconData, setWeatherIconData] = useState([])
  const [weatherIconLink, setWeatherIconLink] = useState([])

  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Vienna`;
  
  
  useEffect(() => {
    fetch(apiUrl, {
      method: 'GET',
      mode:'cors',
      contentType: 'application/json',
      })
    
    .then(response => response.json())
    .then(data => {
    setWeatherIconData(data.current.condition.icon)
    const weatherIconLink = weatherIconData.slice(20, weatherIconData.length);
    setWeatherIconLink(weatherIconLink)

  })
  }, [weatherIconData]);

   return (
        <div className="weather-component">
            {weatherIconLink.length > 0 && 
                <img src={weatherIconLink} className="weather-image" alt="weather-icon" />
            }

        </div>
            
      );
  }
