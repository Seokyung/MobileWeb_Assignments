//ToDo 리스트의 요소들을 관리하는 컴포넌트
import React, {useState} from "react"; //state를 사용을 위한 useState함수 임포트
import InputTodo from "./components/inputTodo"; //InputTodo 컴포넌트 임포트
import TodoItemList from "./components/todoItemList"; //TodoItemList 컴포넌트 임포트
import "./todoList.css"; //스타일 적용

function TodoList() {
    const [itemList, setItemList] = useState([]); //아이템 리스트의 상태가 바뀔때마다 업데이트되는 state 배열 itemList

    return(
        <div className="todo-container">
            <h1 id="title">To-Do List</h1>{/** 제목 */}
            <InputTodo itemList={itemList} setItemList={setItemList} />{/** 할일 아이템 입력폼 배치, props로 state변수들을 받아감 */}
            <TodoItemList itemList={itemList} setItemList={setItemList} />{/** 할일 아이템 목록을 보여주는 리스트 배치, props로 state변수들 받아감 */}
        </div>
    );
}

export default TodoList; //TodoList 컴포넌트 내보냄