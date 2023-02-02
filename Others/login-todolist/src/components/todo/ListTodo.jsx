import React, {useState} from "react";
import "./Todo.css";
import { useTodoState } from "../user/TodoProvider";
import ItemTodo from "./ItemTodo";

function ListTodo(props) {
    const [todoList, setTodoList] = useTodoState();

    return(
        <div id="list-wrapper">
            <ul>
                {todoList.map((item) => {
                    return(
                        <ItemTodo
                            key={item.id}
                            item={item}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default ListTodo;