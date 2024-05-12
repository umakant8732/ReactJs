import { useState } from 'react'



function App() {

  let [color, setColor] = useState("red");

  let changeColor = (colorName) =>{
    setColor(colorName);
  }

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Red"}}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Blue"}} onClick={()=> changeColor("Blue")}>Blue</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Green"}}>Green</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Orange"}}>Orange</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Pink"}}>Pink</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Purple"}}>Purple</button>

        </div>
      </div>
    </div>
  )
}

export default App
