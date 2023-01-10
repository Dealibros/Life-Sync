import './styles.css';
import React, {useEffect, useState} from 'react';

export default function Weather() {
    const [location, setLocation] = useState([]);
    const [weatherIconData, setWeatherIconData] = useState([]);
    const [weatherIconLink, setWeatherIconLink] = useState([]);
    const [temperature, setTemperature] = useState([]);

    const apiLocationUrl = `http://ip-api.com/json/`;

    useEffect(() => {
        fetch(apiLocationUrl, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setLocation(response);
            })
            .catch((error) => {
                console.log('error!', error);
            });
    }, []);

    const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
    const apiWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.lat + ',' + location.lon}`;

    //Why is it still complaining after the condition statement?
    useEffect(() => {
        if (location.lat && location.lon) {
            fetch(apiWeatherUrl, {
                method: 'GET', mode: 'cors', contentType: 'application/json',
            })
                .then((response) => response.json())
                .then((data) => {
                    setTemperature(data.current.temp_c);
                    setWeatherIconData(data.current.condition.icon);
                    const weatherIconLink = weatherIconData.slice(20, weatherIconData.length,);
                    setWeatherIconLink(weatherIconLink);
                });
        }
    }, [weatherIconData, location]);

    return (<div className="weather-component">
        {weatherIconLink.length > 0 && (<>
            <img
                src={weatherIconLink}
                className="weather-image"
                alt="weather-icon"
            />
            <h6 className="temperature">{temperature} °C</h6>
        </>)}
    </div>);
}
