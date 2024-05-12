import React, { createContext } from "react";
import { useState, useContext } from "react";
import { weatherApiData, weatherApiDataCurrentLocation } from "../Api/WeatherApi";


export const weatherContextHolder = createContext(null);

export const WeatherContextProvider  =  (props) =>{

    const [weatherData, setWeatherData] = useState(null);
    const [searchCity, setSearchCity] = useState("");

    const fetchWeatherData = async () => {
        const response = await weatherApiData(searchCity);
        setWeatherData(response);
    }

    const getCurrentlocationWeather = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            weatherApiDataCurrentLocation(position.coords.latitude, position.coords.longitude)
            .then((data) => setWeatherData(data));
        })
        
    }

    return (
        <weatherContextHolder.Provider value={{weatherData, searchCity, setWeatherData, setSearchCity, fetchWeatherData, getCurrentlocationWeather}}>
            {props.children}
        </weatherContextHolder.Provider>
    )
}

export const useWeatherContext = () => {
    return useContext(weatherContextHolder);
}