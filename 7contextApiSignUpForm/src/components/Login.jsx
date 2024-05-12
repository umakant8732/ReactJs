import React, { useState } from "react";
import { useContext } from "react";
import { UserContextHolder } from "../context/UserContext";

const Login = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    console.log(username);
    console.log(password);

    const {user, setUser} = useContext(UserContextHolder);
    console.log(user);

    function submitForm (e) {
        e.preventDefault;
        setUser({username, password})
    }

    return (
        <div className="signup-form">
            <h4>Sign Up Form</h4>
            <input type="text" placeholder="enter the Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder="enter the password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={submitForm}>submit</button>
        </div>
    )
}

export default Login;