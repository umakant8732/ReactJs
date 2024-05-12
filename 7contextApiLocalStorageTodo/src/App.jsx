import Form from './assets/components/Form'
import { TodoContextHolder } from './assets/context/TodoContext'
import { useContext, useEffect, useState } from 'react'
import './App.css'
import TodoList from './assets/components/TodoList';

function App() {

  // this state containes all todos.
  const [allTodosHolder, setAllTodosHolder] = useState([]);

  // this context contains schema.
  const todoStates = useContext(TodoContextHolder);

  //this function receives single todo as argument and add into the all todos.
  todoStates.addTodo = (singleTodo) => {
    let todo = [...allTodosHolder, singleTodo];
    setAllTodosHolder(todo);
  }

  //this function update the todo.

  todoStates.updateTodo = (id, updatedTodo) => {
    let todo = [...allTodosHolder.map((todo) => todo.id === id ? updatedTodo : todo)];
    setAllTodosHolder(todo);
  }

  // //delete todo
  todoStates.deleteTodo = (id) => {
   let todo = [...allTodosHolder.filter((todo)=> todo.id !== id )];
   setAllTodosHolder(todo);
  }

  //toggle todo 

  todoStates.toggleComplete = (id) => {
    let todo = [...allTodosHolder.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)];
    setAllTodosHolder(todo)
  }



  useEffect(() => {
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    if (allTodos && allTodos.length > 0) {
      setAllTodosHolder(allTodos);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodosHolder));
  }, [allTodosHolder]);


  return (
    <>
      <h3 className="bg-pink-600 p-2">Context Api To Do App</h3>
      <div className="bg-[#172842] min-h-screen py-8 mt-5">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <Form />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              allTodosHolder.map((todo) => (

                <div key={todo.id} className='w-full'>
                  <TodoList todo={todo} />
                </div>

              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
