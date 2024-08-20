import { useEffect, useState } from 'react'

import './App.css'

function App() {


  const getTodosFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos")) || []

  }


  const [todos, setTodos] = useState(getTodosFromLocalStorage());
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  }

  const handleAddTodo = () => {
    const newTodos = [...todos, { id: Date.now(), todo: input }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setInput("");
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos); 
    localStorage.setItem("todos", JSON.stringify(newTodos)); 
  }






  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <input className='input-field' type="text" value={input} onChange={handleOnChange} />
        <button className='btn' onClick={handleAddTodo}>Add</button>

        {
          todos?.map((todo, index) => (
            
              <div
                key={todo.id}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                <ul key={todo.id} style={{ margin: 0 }}>{todo.todo}</ul>
                <button className='rmv-button' onClick={() => handleDelete(todo.id)}>Remove</button>
              </div>

            
          ))
        }




      </div>

    </>
  )
}

export default App
