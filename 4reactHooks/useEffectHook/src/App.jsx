import { useState, useEffect } from 'react'
import UseEffectComponent from './components/UseEffectComponent'
import CountDownComponent from './components/CountDownComponent';

import './App.css'

function App() {

  const [isVisible, setIsVisible] = useState(true);

  useEffect (() =>{
    console.log("App componet is mounting");
  },[])

  return (
    <>
    <h3>mounting unmounting exmaple</h3>
    <button className="bg-orange-700 rounded-xl px-5 mb-4" onClick={()=> setIsVisible(!isVisible)}>Visible</button>

    <h3>useEffect Hook</h3>
    <p className="text-blue-500">Run Code during the change in lifecycle of a component</p>
    {isVisible ?  <UseEffectComponent name={"useEffect Component Example"}/> : <></>}

    <CountDownComponent/>
    </>
  )
}

export default App
