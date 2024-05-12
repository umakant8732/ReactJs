import React from "react";

const Button  = (props) => {

    return  (
        <button className={`btn ${props.name}`} onClick={props.onClick}>{props.value}</button>
    )

}

export default Button;