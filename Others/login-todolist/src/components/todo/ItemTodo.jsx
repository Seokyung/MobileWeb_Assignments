import React, {useState, useEffect, useRef} from "react";
import "./Todo.css";

function ItemTodo(props) {
    const [isEdit, setIsEdit] = useState(false);
    const [editItem, setEditItem] = useState(props.item.value);
    const editFocus = useRef(null);

    useEffect(() => {
        if(isEdit) {
            editFocus.current.focus();
        }
    }, [isEdit]);


    const editTodo = () => {
        setIsEdit(true);
    }

    const handleEditItem = (e) => {
        setEditItem(e.target.value);
    }

    const updateTodo = (editId) => {
        const newTodoList = props.todoList.map((item) => (
            {
                id: item.id,
                value: item.id === editId ? editItem : item.value,
            }
        ));

        props.setTodoList(newTodoList);
        setIsEdit(false);
    }

    const deleteTodo = (delId) => {
        const newTodoList = props.todoList.filter((item) => item.id !== delId);
        props.setTodoList(newTodoList);
    }

    return(
        <li>
            {isEdit ?
            <>
                <input type="text" value={editItem} ref={editFocus} onChange={handleEditItem}/>
                <button onClick={() => updateTodo(props.item.id)}>Update</button>
            </>
            :
            <>
                {props.item.value}
                <button onClick={editTodo}>Edit</button>
                <button onClick={() => deleteTodo(props.item.id)}>Delete</button>
            </>}
        </li>
    );
}

export default ItemTodo;