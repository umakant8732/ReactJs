import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import AllTodos from './components/AllTodos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 className="bg-orange-400 p-2 rounded-xl">Todo Project using Redux Toolkit</h3>
      <AddTodo/>
      <AllTodos/>
    </>
  )
}

export default App
