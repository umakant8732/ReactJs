import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const copyGeneratedPasswordReference = useRef(null);


  const passwordGenerator = useCallback(() => {

    let generatedPassword = "";
    let passWordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumberAllowed) {
      passWordString += "123456789";
    }
    if (isCharAllowed) {
      passWordString += "!@#$%^&*+><?";
    }

    for (let i = 1; i <= length; i++) {
      let randomPasswordStringIndex = Math.floor(Math.random() * passWordString.length + 1);
      generatedPassword += passWordString.charAt(randomPasswordStringIndex);
    }

    setPassword(generatedPassword);


  }, [length, isCharAllowed, isNumberAllowed, setPassword]);


  useEffect(() => { passwordGenerator() }, [length, isNumberAllowed, isCharAllowed, passwordGenerator]);

  
  function copyPassword () {
    copyGeneratedPasswordReference.current?.select();
    copyGeneratedPasswordReference.current?.setSelectionRange(0, Password.length);
    window.navigator.clipboard.writeText(Password);
  }


  return (

    <>

      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-orange-600 bg-slate-200">
        <h3 className="text-orange-600 text-center mb-2">Password Generator using Hooks</h3>
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-2">
          <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={copyGeneratedPasswordReference} />
          <button className="outline-none bg-orange-600 text-white px-3 py-0.5 shrink-0"  onClick={copyPassword}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">


          <div className="flex items-center gap-x-1">
            <input type="range"
              min={8}
              max={20}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className="cursor-pointer"
            />
            <label htmlFor="length">length: {length}</label>
          </div>



          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={isNumberAllowed}
              onChange={() => { setIsNumberAllowed((prev) => !prev) }}
            />
            <label htmlFor="number">Numbers</label>
          </div>



          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={isNumberAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />
            <label htmlFor="characters">Character</label>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
