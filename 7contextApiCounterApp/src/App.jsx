import { useState } from 'react'
import CounterComponent from './components/CounterComponent'
import { CounterContextHolder } from './context/CounterContext'
import { CounterContextProvider } from './context/CounterContext'
import { useContext } from 'react'
import './App.css'

function App() {

  const {count, setcount} = useContext(CounterContextHolder);
  console.log(useContext(CounterContextHolder));
 

  return (
        <>
        <h4>creating Counter App </h4>
        <h4>Counter Values is {count}</h4>
        <CounterComponent />
        <CounterComponent />
        <CounterComponent />
        <CounterComponent />
      </>
  )
}

export default App
