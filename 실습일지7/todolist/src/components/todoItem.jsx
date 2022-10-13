//하나의 할 일 아이템
import React, {useState, useEffect, useRef} from "react";
import "./../todoList.css"

function TodoItem(props) {
    const [isEdit, setIsEdit] = useState(false);
    const [editItem, setEditItem] = useState(props.item.value);

    const editFocus = useRef(null);

    useEffect(() => {
        if(isEdit) {
            editFocus.current.focus();
        }
    }, [isEdit]);

    const deleteTodoList = (id) => {
        const newItemList = props.itemList.filter((itemList) => itemList.id !== id);
        props.setItemList(newItemList);
        console.log(`[아이템 삭제] id: ${id} value: ${props.item.value}`);
    };

    const clickEditBtn = () => {
        setIsEdit(true);
    };

    const updateTodoList = (id) => {
        const newItemList = props.itemList.map((edit) => (
            {
                ...edit,
                value: edit.id === id ? editItem : edit.value,
            }
        ));
        props.setItemList(newItemList);
        setIsEdit(false);
        console.log(`[아이템 수정] id: ${id} value: ${editItem}`);
    };

    return(
        <li id="item">
            {isEdit ?
                <>
                    <input
                        id="updateTxt"
                        type="text"
                        value={editItem}
                        ref={editFocus}
                        onChange={(event) => setEditItem(event.target.value)}
                    />
                    <img
                        id="update"
                        src="update.png"
                        onClick={() => updateTodoList(props.item.id)}
                        alt="update"
                    />
                </>
                :
                <>
                    {props.item.value}
                    <img
                        id="edit"
                        src="edit.png"
                        onClick={clickEditBtn}
                        alt="edit"
                    />
                    <img
                        id="trash"
                        src="trash.png"
                        onClick={() => deleteTodoList(props.item.id)}
                        alt="trash"
                    />
                </>
            }
        </li>
    );
}

export default TodoItem;