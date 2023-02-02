import React from "react";
import "./Todo.css";
import { useUserState } from "../user/UserProvider";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";

function TodoPage(props) {
    const [userId, setUserId] = useUserState();

    return(
        <div id="todo-wrapper">
            <p>Hello, {userId}!</p>
            <p>This is Todo Page.</p>
            <InputTodo/>
            <ListTodo/>
        </div>
    )
}

export default TodoPage;