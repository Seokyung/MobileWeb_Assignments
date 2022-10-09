import React from "react"; //React 임포트

//아이디를 입력할 수 있는 input필드 컴포넌트
function Input(props) {
    return(
        <span>
            {/** input필드의 내용이 바뀔때마다(onChange) props를 통해 LoginControl의 onChange함수를 호출함 (입력하는 내용 실시간으로 userId에 업데이트됨) */}
            아이디: <input id="id" onChange={props.onChange} type="text" className="inputId"></input>&nbsp;
        </span>
    );
}

export default Input; //Input 컴포넌트 반환