import React from "react";
import { CountContext } from "../context/CountContext";
import { useContext } from "react";

const ComponentTwo = (props) => {

    const usingContextState = useContext(CountContext);
    console.log(usingContextState);

    function add () {
        usingContextState.setContextCount(usingContextState.contextCount + 1);
    }

    
    return (
        <div className="component-two">
            <p>This is component Two {props.countValue}</p>
            <p>This is Context State {usingContextState.contextCount}</p>
            <p>changing context state by click on add button</p>
            <button onClick={add}>add</button>
        </div>
    )
}


export default ComponentTwo;