import React from "react";
import { useWeatherContext } from "../context/WeatherContext";

const Input = () => {

    const weatherStates = useWeatherContext();

    return (
        <input className="input-field"
            type="text"
            placeholder="Type City Name"
            value={weatherStates.searchCity}
            onChange={(e) => weatherStates.setSearchCity(e.target.value)} />
    )
}


export default Input;