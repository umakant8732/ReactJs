import { useState } from 'react'
import './App.css'
import Items from './components/Items'
import Cart from './components/Cart'

function App() {

  return (


    <div className="items-container">

      <Items name={"macbook"} price={70000} />
      <Items name={"iphone"} price={45930}/>
      <Items name={"samsung"} price={78000}/>
      <Items name={"nokia"} price={67000}/>

      <div>
        <Cart/>
      </div>
    </div>

  )
}

export default App
