import React, {useState, useEffect, useRef} from "react";
import "./Todo.css";

function InputTodo(props) {
    const [inputItem, setInputItem] = useState('');
    const todoId = useRef(0);
    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current.focus();
    });

    const handleInputItem = (e) => {
        setInputItem(e.target.value);
    }

    const addTodo = () => {
        props.setTodoList((prevItem) => {
            return[
                {
                    id: todoId.current,
                    value: inputItem,
                },
                ...prevItem,
            ]
        });
        todoId.current++;
        setInputItem('');
    }

    return(
        <div id="input-wrapper">
            <input type="text" value={inputItem} ref={inputFocus} onChange={handleInputItem} size="30" placeholder="Write your daily plan freely :)" />
            <button type="submit" onClick={addTodo}>Add</button>
        </div>
    )
}

export default InputTodo;