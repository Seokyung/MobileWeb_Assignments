//하나의 할일 아이템
import React, {useState, useEffect, useRef} from "react"; //React와 hook함수들 임포트
import "./../todoList.css"; //스타일 적용

function TodoItem(props) { //key와 item, 그리고 state변수 itemList, setItemList를 todoItemList에서 props로 받아옴
    const [isEdit, setIsEdit] = useState(false); //수정모드인지 확인하는 플래그 state변수
    const [editItem, setEditItem] = useState(props.item.value); //수정한 내용을 저장하는 state변수 (초기값은 아이템의 원래 내용)

    const editFocus = useRef(null); //수정폼에 포커싱해주기 위한 ref변수

    //수정모드로 변할때마다 수정폼에 포커싱
    useEffect(() => {
        if(isEdit) {
            editFocus.current.focus();
        }
    }, [isEdit]);

    //선택한 아이템을 삭제하는 함수
    const deleteTodoList = (id) => { //삭제할 아이템의 id를 파라미터로 받아옴
        //filter함수를 이용해 id가 파라미터로 받아온 id(삭제할 아이템의 id)와 다른 아이템만으로 리스트 재생성해줌
        //즉, 삭제할 아이템만 빼고 새 리스트를 만듦
        const newItemList = props.itemList.filter((itemList) => itemList.id !== id); //아이템을 삭제한 새 리스트를 newItemList배열에 저장
        props.setItemList(newItemList); //props로 받아온 아이템 리스트를 삭제한 리스트로 업데이트해줌
        console.log(`[아이템 삭제] id: ${id} value: ${props.item.value}`); //삭제한 아이템 콘솔창에 출력
    };

    //수정버튼 클릭 시 수정모드로 바꿔주는 함수
    const clickEditBtn = () => {
        setIsEdit(true);
    };

    //선택한 아이템의 내용을 수정하는 함수
    const updateTodoList = (id) => { //수정할 아이템의 id를 파라미터로 받아옴
        //map함수를 이용해 새 리스트를 만들고 newItemList 배열에 저장
        //id가 파라미터로 받아온 id(수정할 아이템의 id)와 같지 않으면 원래 value를 저장하고, 그렇지 않으면 수정된 내용 저장
        //즉, 수정할 아이템의 id를 가진 value만 수정된 내용으로 바꿔주고 나머지는 원래 내용 그대로 저장함
        const newItemList = props.itemList.map((edit) => (
            {
                ...edit,
                value: edit.id === id ? editItem : edit.value, //삼항연산자를 이용해 id가 같으면 editItem(수정된 내용)을, 같지 않으면 edit.value(원래 내용)을 value에 저장 
            }
        ));
        props.setItemList(newItemList); //props로 받아온 아이템 리스트를 수정된 리스트로 업데이트해줌
        setIsEdit(false); //수정모드 해제
        console.log(`[아이템 수정] id: ${id} value: ${editItem}`); //수정된 아이템 콘솔창에 출력
    };

    return(
        <li id="item">
            {/** 하나의 할일 아이템 */}
            {/** 삼항연산자를 이용해 수정모드이면 수정폼과 수정완료 버튼을 보여주고, 수정모드가 아니면 아이템 내용과 수정, 삭제버튼이 보이게 해줌 */}
            {isEdit ?
                <>
                    {/** 아이템의 수정할 내용을 입력받는 input태그 */}
                    <input
                        id="updateTxt"
                        type="text"
                        value={editItem} //수정폼의 value는 editItem
                        ref={editFocus} //수정폼으로 포커싱
                        onChange={(event) => setEditItem(event.target.value)} //내용을 입력할때마다 실시간으로 바뀐 value값이 editItem에 저장됨
                    />
                    {/** 아이템의 수정사항을 적용하는 button(img태그) */}
                    <img
                        id="update"
                        src="update.png"
                        onClick={() => updateTodoList(props.item.id)} //버튼을 클릭 시 선택한 할일 아이템의 id가 파라미터로 넘어가고, 해당 아이템의 내용(value)이 수정됨
                        alt="update"
                    />
                </>
                :
                <>
                    {props.item.value}{/** 아이템의 내용 */}
                    {/** 아이템 수정 button(img태그) */}
                    <img
                        id="edit"
                        src="edit.png"
                        onClick={clickEditBtn} //버튼 클릭 시 아이템의 상태가 수정모드로 바뀜
                        alt="edit"
                    />
                    {/** 아이템 삭제 button(img태그) */}
                    <img
                        id="trash"
                        src="trash.png"
                        onClick={() => deleteTodoList(props.item.id)} //버튼을 클릭 시 선택한 할일 아이템의 id가 파라미터로 넘어가고, 해당 아이템이 삭제됨
                        alt="trash"
                    />
                </>
            }
        </li>
    );
}

export default TodoItem; //TodoItem 컴포넌트 내보냄