import { useState } from 'react'
import './App.css'
import './TicTac.css'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h4>Creating Tic Tac Toe Game To Get Familiar With React Syntax</h4>
      <div className="App">
        <Board />
      </div>

    </>
  )
}

export default App
