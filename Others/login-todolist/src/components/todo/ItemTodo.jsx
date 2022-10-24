import React, {useState} from "react";
import "./Todo.css";

function ItemTodo(props) {
    const deleteTodo = (delId) => {
        const newTodoList = props.todoList.filter((item) => item.id !== delId);
        props.setTodoList(newTodoList);
    }

    return(
        <li>
            {props.item.value}
            <button onClick={() => deleteTodo(props.item.id)}>Delete</button>
        </li>
    );
}

export default ItemTodo;