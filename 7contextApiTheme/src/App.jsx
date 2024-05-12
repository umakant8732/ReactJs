import { useState, useContext, useEffect } from 'react'
import CardUi from './components/CardUi'
import ButtonUi from './components/ButtonUi'
import { ThemeContextHolder } from './context/ThemeContext'
import './App.css'

function App() {

  const states  = useContext(ThemeContextHolder);
  
  states.func.lightMode = () =>{
    states.setThemeMode("light");
  }

  states.func.darkMode = () =>{
    states.setThemeMode("dark");
  }
 

  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light");
    document.querySelector('html').classList.add(states.themeMode);
  },[states.themeMode])
  
  
 

  return (
    <div className="app">
      <h4 className="bg-pink-700 p-2">Theme Changer Project With Context Api</h4>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ButtonUi/>
          </div>

          <div className="w-full max-w-sm mx-auto">
          <CardUi/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
