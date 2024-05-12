import { useEffect, useState } from 'react'
import Homepage from './components/Homepage'
import './App.css'
import { MemeApiFetch } from './Api/MemeApiFetch'

function App() {

  return (
    <>
     <h3 className="bg-pink-500 p-2">Meme Generator App</h3>
    <Homepage/>
    </>
  )
}

export default App
