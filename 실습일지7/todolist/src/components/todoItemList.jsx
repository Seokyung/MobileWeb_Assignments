//할일 아이템들의 리스트
import React, {useEffect} from "react"; //React와 useEffect함수 임포트
import TodoItem from "./todoItem"; //TodoItem 컴포넌트 임포트
import "./../todoList.css"; //스타일 적용

function TodoItemList(props) { //state변수 itemList, setItemList를 todoList에서 props로 받아옴
    //리스트가 변경(아이템 추가, 삭제, 수정)될 때마다 실행되는 useEffect 함수
    useEffect(() => {
        console.log("[리스트 변경]", props.itemList);
    },[props.itemList]);

    return(
        <div className="todo-element-list">{/** 할일 아이템 리스트를 감싸는 div태그 */}
            <ul id="list">
                {/** 아이템 리스트가 있을때만, map함수를 이용해 리스트의 아이템을 하나씩 출력 */}
                {props.itemList && props.itemList.map((item) => {
                    return(
                        <TodoItem
                            //TodoItem에 props로 넘길 변수들
                            key={item.id} //아이템의 id를 key로 나열할 아이템을 찾음
                            item={item} //출력할 아이템
                            itemList={props.itemList} //props로 받아온 itemList
                            setItemList={props.setItemList} //props로 받아온 setItemList
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoItemList; //TodoItemList 컴포넌트 내보냄