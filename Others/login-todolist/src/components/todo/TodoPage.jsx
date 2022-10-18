import React, {useState} from "react";
import "./Todo.css";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";

function TodoPage(props) {
    const [todoList, setTodoList] = useState([]);

    const gobackLogin = () => {
        props.setIsLogin(false);
    }

    return(
        <div id="todo-wrapper">
            <h2>Welcome to To-Do List!</h2>
            <InputTodo todoList={todoList} setTodoList={setTodoList}/>
            <ListTodo todoList={todoList} setTodoList={setTodoList}/>
            <button onClick={gobackLogin}>Logout</button>
        </div>
    );
}

export default TodoPage;