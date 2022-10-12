//ToDo 리스트의 요소들을 관리하는 컴포넌트
import React, {useState} from "react";
import InputTodo from "./components/inputTodo";
import TodoItemList from "./components/todoItemList";
import "./todoList.css";

function TodoList() {
    const [itemList, setItemList] = useState([]);

    return(
        <div className="todo-container">
            <h1 id="title">To-Do List</h1>
            <InputTodo itemList={itemList} setItemList={setItemList} />
            <TodoItemList itemList={itemList} setItemList={setItemList} />
        </div>
    );
}

export default TodoList;