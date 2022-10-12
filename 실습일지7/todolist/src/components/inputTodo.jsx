//할 일을 입력받을 수 있는 입력폼
import React, {useState, useEffect, useRef} from "react";
import "./../todoList.css"

function InputTodo(props) {
    const [inputItem, setInputItem] = useState('');

    const itemId = useRef(0);
    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current.focus();
    });

    const addTodoList = () => {
        if(inputItem.length > 0) {
            props.setItemList((prevItem) => {
                console.log(itemId.current, inputItem);
                return[
                    {
                        id: itemId.current,
                        value: inputItem,
                    },
                    ...prevItem,
                ]
            });
    
            setInputItem('');
            inputFocus.current.focus();
    
            itemId.current++;
        }
    };

    return(
        <div className="todo-add-elements">
            <input
                type="text"
                id="add"
                value={inputItem}
                ref={inputFocus}
                onChange={(event) => setInputItem(event.target.value)}
            />
            <button
                type="submit"
                id="addbtn"
                onClick={addTodoList}
            >
                할일 추가
            </button>
        </div>
    )
}

export default InputTodo;