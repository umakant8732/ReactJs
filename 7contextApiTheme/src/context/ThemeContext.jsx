import React, { useContext, useState } from "react";
import { createContext } from "react";

export const ThemeContextHolder = createContext(null);

export const ThemeContextProvider = (props) => {

    const [themeMode, setThemeMode] = useState("light");
    let func = {
        lightMode : () => {},
        darkMode : () => {}
    }
    

    return (
        <ThemeContextHolder.Provider value={{themeMode, setThemeMode, func }}>
                {props.children}
        </ThemeContextHolder.Provider>
    )
}