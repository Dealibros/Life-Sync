import './styles.css';
import React, { useState, useEffect } from "react";

export default function QuoteComponent() {

  const [weatherIconData, setWeatherIconData] = useState([])
  const [weatherIconLink, setWeatherIconLink] = useState([])

  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=8ef5cbf8459a41c7afe95707222312&q=Vienna`;
  
  
  useEffect(() => {
    fetch(apiUrl, {
      method: 'GET',
      mode:'cors',
      contentType: 'application/json',
      })
    
    .then(response => response.json())
    .then(data => {
    setWeatherIconData(data.current.condition.icon)
    console.log(data)

    const weatherIconLink = weatherIconData.slice(20, weatherIconData.length);
    console.log(weatherIconLink)
    setWeatherIconLink(weatherIconLink)

    console.log(weatherIconLink)
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
