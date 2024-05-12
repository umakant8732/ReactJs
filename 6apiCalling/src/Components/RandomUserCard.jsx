import React from "react";


const RandomUserCard = (props) =>{
    
    return (
        <>
        <div className="user-card">
            <img src={props.userCardData.results[0].picture.thumbnail} alt="" className="user-img" />
            <h4>{props.userCardData.results[0].login.username}</h4>
            <p>{props.userCardData.results[0].phone}</p>
        </div>
        </>
    )
}


export default RandomUserCard