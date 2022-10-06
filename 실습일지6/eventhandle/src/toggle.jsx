import React, { useState, useEffect } from "react"; //state를 사용을 위한 useState함수와 컴포넌트가 렌더링된 후 작업을 하기 위한 useEffect함수 임포트

//Toggle - 버튼을 클릭할 때마다 버튼 안의 텍스트가 바뀌는 컴포넌트
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true); //useState함수를 이용해 state변수 isToggleOn 선언 및 초기화

    //Toggle 컴포넌트가 렌더링될때마다 실행됨 (즉, 버튼을 클릭하면 state변수가 바뀌면서 재렌더링되기 때문에 버튼을 클릭할때마다 useEffect함수가 실행됨)
    useEffect(() => {
        //실행직후 handleClick()함수 안에 있는 로그는 보이지 않지만 useEffect() 함수 안에 있는 로그는 보임 (렌더링될때마다 실행되기 때문)
        console.log(`useEffect() - state변수(isToggleOn)의 값: ${isToggleOn}`); //isToggleOn의 상태를 콘솔에 출력함 (최신 상태 값이 출력됨)
    })

    //버튼 클릭시 실행되는 함수
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn); //setIsToggleOn을 통해 state변수인 isToggleOn의 값을 바꿔줌
        console.log("토글상태:", isToggleOn); //함수가 실행되었을 때 isToggleOn의 상태를 콘솔에 출력함 (렌더링 되기 전이라 바뀌기 전의 상태 값이 출력됨)
    }

    return(
        <div>
            <button onClick={handleClick}> {/** 버튼 클릭시 이벤트핸들러 함수가 실행됨 */}
                {isToggleOn ? "클릭A" : "클릭B"} {/** isToggleOn의 값이 true면 클릭A, false면 클릭B가 보여짐 */}
            </button>
        </div>
    );
}

export default Toggle; //Toggle 컴포넌트 내보냄