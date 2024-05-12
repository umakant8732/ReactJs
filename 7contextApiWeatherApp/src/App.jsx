import { useEffect, useState } from 'react'
import WeatherCard from './components/weatherCard'
import Input from './components/Input'
import Button from './components/Button'
import { weatherApiData } from './Api/WeatherApi'
import { useWeatherContext } from './context/WeatherContext'
import './App.css'

function App() {

  const weatherStates = useWeatherContext();
  


  useEffect(() => {
    weatherStates.getCurrentlocationWeather();
  },[]);

 
  return (
    <div className="app">
      <h3>This is Weather App</h3>
      <Input />
      <Button onClick={weatherStates.fetchWeatherData} value={"Search"} name={"search"} />
      <WeatherCard />
      <Button value={"refresh"} name={"refresh"} />
    </div>
  )
}

export default App
