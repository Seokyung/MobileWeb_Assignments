//할일 아이템을 입력받을 수 있는 입력폼
import React, {useState, useEffect, useRef} from "react"; //React와 hook함수들 임포트
import "./../todoList.css"; //스타일 적용

function InputTodo(props) { //state변수 itemList, setItemList를 todoList에서 props로 받아옴
    const [inputItem, setInputItem] = useState(''); //입력폼에 입력한 내용을 저장하는 state변수

    const itemId = useRef(0); //아이템에 id를 부여하기 위한 ref변수
    const inputFocus = useRef(null); //입력폼에 포커싱해주기 위한 ref변수

    //렌더링될때마다 입력폼에 포커싱
    useEffect(() => {
        inputFocus.current.focus();
    });

    //할일 아이템 리스트에 아이템을 추가하는 함수
    const addTodoList = () => {
        if(inputItem.length > 0) { //입력폼에 작성한 내용이 있으면 아이템 추가
            props.setItemList((prevItem) => {
                console.log(`[아이템 추가] id: ${itemId.current} value: ${inputItem}`); //추가한 아이템 콘솔창에 출력
                return[ //아이템 리스트에 아이템 추가
                    {
                        id: itemId.current, //아이템에 id 부여
                        value: inputItem, //리스트에 저장될 아이템 내용(input태그의 value인 inputItem. 즉, 사용자가 입력한 내용이 저장됨)
                    },
                    ...prevItem, //기존에 저장되어있던 아이템 리스트들 풀기
                ]
            });
    
            setInputItem(''); //입력폼 내용 초기화
            inputFocus.current.focus(); //입력폼으로 포커싱
    
            itemId.current++; //id값 증가
        }
    };

    return(
        <div className="todo-add-elements">{/** 입력폼을 감싸는 div태그 */}
            {/** 아이템을 입력받는 input태그 */}
            <input
                type="text"
                id="add"
                value={inputItem} //입력폼의 value는 inputItem
                ref={inputFocus} //입력폼으로 포커싱
                onChange={(event) => setInputItem(event.target.value)} //내용을 입력할때마다 실시간으로 바뀐 value값이 inputItem에 저장됨
            />
            {/** 입력받은 아이템을 리스트에 추가하는 button */}
            <button
                type="submit"
                id="addbtn"
                onClick={addTodoList} //버튼을 클릭 시 할일 아이템이 추가됨
            >
                할일 추가
            </button>
        </div>
    )
}

export default InputTodo; //InputTodo 컴포넌트 내보냄