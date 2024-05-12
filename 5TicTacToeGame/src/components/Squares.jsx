import React from "react";

const Square = (props) => {
    return (
        <div onClick={props.onclick} className="square">
            <h5>{props.value}</h5>
        </div>
    )
}

export default Square