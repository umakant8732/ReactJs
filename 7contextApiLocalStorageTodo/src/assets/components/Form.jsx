import { useContext, useState, useMemo, useCallback } from "react";
import { TodoContextHolder } from "../context/TodoContext";


function Form() {

    //state for individual todoContent
    const [content, setContent] = useState("");

    const todoStates = useContext(TodoContextHolder);


    function add(e) {
        e.preventDefault();
        if (!content) {
            return
        }
        todoStates.addTodo({id: Date.now(), todoContent: content, completed: false });
        setContent("");
    }




    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default Form;

