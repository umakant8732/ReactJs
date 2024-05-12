import { useState } from 'react'
import ComponentOne from './components/ComponentOne'
import './App.css'

import { CountContext } from './context/CountContext'

import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(5)
  const usingContextState = useContext(CountContext);

  return (
    <>
      <h5>here i am doint prop drilling to understand context Api in a better way</h5>
      <div className="app-component">
        <p>This is app component {count}</p>
      <p>This is Context State {usingContextState.contextCount}</p>
        <ComponentOne countValue={count}/>
      </div>
      
    </>
  )
}

export default App
