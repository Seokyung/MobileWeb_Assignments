import React from "react";
import "./Todo.css";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";

function TodoPage(props) {
    const gobackLogin = () => {
        props.setIsLogin(false);
    }

    return(
        <div id="todo-wrapper">
            <h2>Welcome back, {props.userId}!</h2>
            <h2>Check your To-Do List!</h2>
            <InputTodo todoList={props.todoList} setTodoList={props.setTodoList}/>
            <ListTodo todoList={props.todoList} setTodoList={props.setTodoList}/>
            <button onClick={gobackLogin}>Logout</button>
        </div>
    );
}

export default TodoPage;