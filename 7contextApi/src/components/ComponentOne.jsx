import React from "react";
import ComponentTwo from "./ComponentTwo";
import { CountContext } from "../context/CountContext";

import { useContext } from "react";

const ComponentOne = (props) =>{

    const usingContextState = useContext(CountContext);
    return (
        <div className="component-one">
            <p>This is component one {props.countValue}</p>
            <p>This is context State {usingContextState.contextCount}</p>
            <ComponentTwo countValue={props.countValue}/>
        </div>
    )
}

export default ComponentOne;