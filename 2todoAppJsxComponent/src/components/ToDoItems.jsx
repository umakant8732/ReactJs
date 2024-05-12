import React from "react";

const ToDoItem = (props) => {
    return (
        <>
            <li className="todo-item">
                <span>
                    <input type="checkbox" />
                    <span className="ml-2">{props.text}</span>
                </span>
                <p>...</p>
            </li>
        </>
    )
}

export default ToDoItem;