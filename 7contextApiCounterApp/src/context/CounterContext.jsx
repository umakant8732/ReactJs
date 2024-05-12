import React, { useState } from "react";
import { createContext } from "react";

export const CounterContextHolder = createContext({
    name : "umakant",
});

export const CounterContextProvider = (props) => {

    const [count, setCount] = useState(2);
    return (
        <CounterContextHolder.Provider value={{count, setCount}}>
            {props.children}
        </CounterContextHolder.Provider>
    )
}