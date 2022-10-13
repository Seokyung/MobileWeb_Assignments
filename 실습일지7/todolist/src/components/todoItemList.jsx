//할 일 아이템들의 리스트
import React,{useEffect} from "react";
import TodoItem from "./todoItem";
import "./../todoList.css"

function TodoItemList(props) {
    useEffect(() => {
        //console.log(props.itemList);
    },[props.itemList]);
    return(
        <div className="todo-element-list">
            <ul id="list">
                {props.itemList.map((item) => {
                    return(
                        <TodoItem
                            key={item.id}
                            item={item}
                            itemList={props.itemList}
                            setItemList={props.setItemList}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoItemList;