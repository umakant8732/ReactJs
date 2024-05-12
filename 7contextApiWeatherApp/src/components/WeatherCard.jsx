import React from "react";
import { useWeatherContext } from "../context/WeatherContext";
const WeatherCard = () => {
    const weatherStates = useWeatherContext()
    console.log(weatherStates);
   
   
    return (
        <div className="card">
            <img src={weatherStates.weatherData?.current?.condition?.icon} alt="weather-icon" />
            <h3>{weatherStates.weatherData?.current?.temp_c}</h3>
            <h4>{weatherStates.weatherData?.location?.region}</h4>
        </div>
    )
}

export default WeatherCard;