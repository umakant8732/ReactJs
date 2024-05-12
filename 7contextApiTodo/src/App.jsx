import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Items from './components/Items'
import { ToDoContextProvider } from './context/ToDoContext';

function App() {

  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }

  const updateToDo = (id, todo) => {
    setTodos((prev) => prev.map((eachToDo) => (eachToDo.id === id ? todo : eachToDo)));
  }

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id != id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachToDo) => eachToDo.id === id ? { ...eachToDo, complete: !eachToDo.complete } : eachToDo));
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <ToDoContextProvider value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}>
      <div className="app">
        <h4 className="bg-purple-400 p-2 rounded-xl shadow-2xl">Todo App With Context Api</h4>
        <div className="bg-[#360830] min-h-screen py-8 mt-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <Form />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <Items todo={todo}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  )
}

export default App
