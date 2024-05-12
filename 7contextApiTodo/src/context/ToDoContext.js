import { createContext, useContext } from "react";

export const ToDoContextHolder = createContext({
    todos : [
        {
            id:1,
            todo : "To Do Content",
            complete : false,
        }
    ],
    addToDo : (todo) => {},
    updateToDo : (id, todo) => {},
    deleteToDo : (id) =>{},
    toggleComplete : (id) => {}
});

export const ToDoContextProvider = ToDoContextHolder.Provider;

export const useToDoContext = () => {
    return useContext(ToDoContextHolder);
}