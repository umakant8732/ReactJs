import './App.css'
import React from 'react'
import Header from './components/header'
import ToDoItem from './components/ToDoItems'
import Button from './components/Button'
import './ToDoStyle.css'


function App() {
  
  return (
    <>
      <h3 className="text-purple-700">To Do Application</h3>
      <p className="text-purple-900">In this session, we are going to design a to-do <app className="br"></app> just to get hands-on with JSX and components</p>


      <div className="todo-container mt-5">
       <Header/>
       <ToDoItem text={'eat'}/>
       <ToDoItem text={'sleep'}/>
       <ToDoItem text={'coding'}/>
       <ToDoItem text={'dinner'}/>
       <Button/>
      </div>
    </>
  )
}

export default App
