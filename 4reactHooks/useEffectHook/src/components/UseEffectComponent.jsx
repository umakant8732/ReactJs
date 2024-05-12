import {useState, useEffect } from "react";

function UseEffectComponent (props) {

    const [value, setValue] = useState(1);
    const [numType, setNumType] = useState("Type");

    function addValue () {
        setValue(value + 1);
    }

    function minusValue () {
        setValue (value - 1);
    }
    
    useEffect (()=>{
        if(value % 2 === 0 ){
            setNumType("even");
        }
        else{
            setNumType("odd");
        }

        return function () { //this return functio runs when we unmount the component fron the screen 
            console.log("unmounting");
        }
       
    },[value]);
   
    return (
        <>
        <h3>{props.name}</h3>
        <p>counter Value :  {value}</p>
        <button className="bg-blue-500 px-4 py-1 rounded-lg mt-2" onClick={addValue}>Add</button>
        <p>current value :  {value}</p>
        <button className="bg-blue-500 px-4 py-1 rounded-lg mt-2" onClick={minusValue}>minus</button>
        <p>number Type : {numType}</p>

        

        </>
    )

}

export default UseEffectComponent