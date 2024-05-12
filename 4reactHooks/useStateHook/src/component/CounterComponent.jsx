import { useEffect, useState } from "react"



function CounterComponent(props) {


    const [counterValue, setCounterValue] = useState(0);
    const [numberType, setNumberType] = useState("Number Type");

    function addValue() {
        if (counterValue >= 15) {
            setCounterValue(1)
        }
         else{
            setCounterValue(counterValue + 1);
         }
        

    }

    function minusValue() {
        if (counterValue <= 0) {
            setCounterValue(15);
        }
        else{
            setCounterValue(counterValue - 1)
        }
        
    }

    // function checkNumberType (){
    //     if(counterValue % 2 == 0){
    //         setNumberType("even");
    //     }
    //     else{
    //         setNumberType("odd");
    //     }
    // }
    
    // useEffect(()=>{checkNumberType()},[counterValue]);


    return (
        <>
            <h1>{props.message}</h1>
            <button className="bg-blue-300 px-4 py-2" onClick={addValue}>Add</button>
            <p>{counterValue}</p>
            <button className="bg-blue-300 px-4 py-2" onClick={minusValue}>minus</button>
           <p>{counterValue % 2 === 0 ? "even" : "odd"}</p>

        </>
    )
}


export default CounterComponent;