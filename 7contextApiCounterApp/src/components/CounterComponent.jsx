import React from "react";
import { CounterContextHolder } from "../context/CounterContext";
import { useContext } from "react";
const CounterComponent = () =>{

    const {count, setCount} = useContext(CounterContextHolder);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
        </div>
    )
}


export default CounterComponent;