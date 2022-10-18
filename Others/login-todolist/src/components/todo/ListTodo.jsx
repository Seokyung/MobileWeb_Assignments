import React, {useState} from "react";
import "./Todo.css";

function ListTodo(props) {
    return(
        <div id="list-wrapper">
            <ul>
                {props.todoList.map((item) => {
                    return(
                        <li key={item.id}>{item.value}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ListTodo;