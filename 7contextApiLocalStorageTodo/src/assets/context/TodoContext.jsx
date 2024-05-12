import React from "react";
import { createContext } from "react";

export const TodoContextHolder = createContext(null);

export const TodoContextProvider = (props) => {


    let material = {
        allTodos : [
            {
                id : 1,
                todoContent : "to do content",
                completed : false,
            }
        ],

        addTodo : (singleTodo) => {},
        updateTodo : (id, singleTodo) => {},
        deleteTodo : (id) => {},
        toggleComplete : (id) => {}

    }


    return (
        <TodoContextHolder.Provider value={material}>
            {props.children}
        </TodoContextHolder.Provider>
    )
}