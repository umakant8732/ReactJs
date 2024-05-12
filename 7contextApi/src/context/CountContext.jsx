import React, { useState } from "react";
import { createContext } from "react";

export const CountContext = createContext(null);

export const CountContextprovider = (props) => {

    const [contextCount, setContextCount] = useState(3);


    return (
        <CountContext.Provider value={{contextCount, setContextCount }}>
            {props.children}
        </CountContext.Provider>
    )
}