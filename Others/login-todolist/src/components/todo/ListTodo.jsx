import React, {useState} from "react";
import "./Todo.css";
import ItemTodo from "./ItemTodo";

function ListTodo(props) {
    return(
        <div id="list-wrapper">
            <ul>
                {props.todoList.map((item) => {
                    return(
                        <ItemTodo key={item.id} item={item} todoList={props.todoList} setTodoList={props.setTodoList}/>
                    )
                })}
            </ul>
        </div>
    );
}

export default ListTodo;