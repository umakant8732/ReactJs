import { createSlice, nanoid } from "@reduxjs/toolkit";


function saveIntoLocalStorage(needState) {
    localStorage.setItem("savedTodos", JSON.stringify(needState.map((eachTodo) => eachTodo)))
}
const savedTodos = localStorage.getItem("savedTodos") ? JSON.parse(localStorage.getItem("savedTodos")) : [];

const initialState = {
    todos: savedTodos
};


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload }
            state.todos.push(todo)
            saveIntoLocalStorage(state.todos)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload);
            saveIntoLocalStorage(state.todos)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer