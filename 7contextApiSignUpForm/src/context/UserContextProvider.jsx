import React, { useState } from "react";
import { UserContextHolder } from "./UserContext";


const UserContextProvider = (props) =>{
    

    const [user, setUser] = useState(null)

    return  (
        <UserContextHolder.Provider value={{user, setUser}}>
            {props.children}
        </UserContextHolder.Provider>
    )
}

export default UserContextProvider;
