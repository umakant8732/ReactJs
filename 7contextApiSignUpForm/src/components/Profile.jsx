import React from "react";
import { UserContextHolder } from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
    const { user, setUser } = useContext(UserContextHolder);

    if (!user) {
        return <div>Please Login</div>
    }
    else {
        return (
            <div className="user-profile">
                <p>username - {user.username}</p>
            </div>
        )
    }
}


export default Profile;