import { useState } from 'react'
import CounterComponent from './component/CounterComponent'
import './App.css'

function App() {
  

  return (
    <>
      <h3>useState Hook</h3>
      <p className="text-blue-400">A state of a component is a variable that holds some <br /> information that may change over the lifetime of the component <br /> Whenever the value of the state changes, the component re-renders itself with updated values. </p><br />
      <CounterComponent message={"This Is Counter Component"}/>
    </>
  )
}

export default App
