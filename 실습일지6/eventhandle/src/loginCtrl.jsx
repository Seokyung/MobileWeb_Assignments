import React, { useState, useEffect, useRef } from "react"; //React와 hook함수들 임포트
import Greeting from "./greeting"; //로그인 상태에 따른 출력메세지를 관리하는 컴포넌트 임포트
import LoginButton from "./loginBtn"; //로그인된 상태일때의 로그인 버튼을 반환하는 컴포넌트 임포트
import LogoutButton from "./logoutBtn"; //로그아웃된 상태일때의 로그인 버튼을 반환하는 컴포넌트 임포트
import Input from "./input"; //아이디를 입력받을 수 있는 컴포넌트 임포트
import "./loginCtrl.css"; //스타일 파일 적용

//로그인 관리 컴포넌트
function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); //로그인 상태를 담는 state변수 선언 및 초기화
    const [userId, setUserId] = useState(""); //Input컴포넌트에서 입력된 내용을 담는 state변수 선언 및 초기화
    const btnClickCnt = useRef(0); //버튼 클릭 횟수를 저장하는 ref변수 선언 및 초기화

    //로그인된 상태에서 버튼을 눌렀을때의 이벤트 핸들링 함수
    const handleLoginClick = () => {
        setUserId(""); //로그인되었기 때문에 아이디 입력을 못하므로 p태그에 출력된 입력 내용 클리어
        setIsLoggedIn(true); //로그인 상태 true로 변경
        btnClickCnt.current = btnClickCnt.current + 1; //버튼 클릭 횟수 1 증가
    }
    //로그아웃된 상태에서 버튼을 눌렀을때의 이벤트 핸들링 함수
    const handleLogoutClick = () => {
        setIsLoggedIn(false); //로그인 상태 false로 변경
        btnClickCnt.current = btnClickCnt.current + 1; //버튼 클릭 횟수 1 증가
    }

    //Input에서 받아온 입력내용이 바뀔때마다 실시간으로 userId에 업데이트해주는 함수
    const onChange = (e) => {
        //id가 "id"인 Input 컴포넌트의 input필드에서 입력된 내용(value)를 받아옴
        setUserId((userId) => document.getElementById("id").value);
    };

    //의존성변수 isLoggedIn의 값이 바뀔때마다(LoginButton, LogoutButton 컴포넌트가 교대로 렌더링될때마다) 호출되는 이펙트 함수
    useEffect(() => {
        //현재 isLoggedIn 변수의 상태와 버튼 클릭 횟수가 콘솔창에 출력됨
        console.log(`[useEffect] isLoggedIn: ${isLoggedIn}, 버튼 클릭 횟수: ${btnClickCnt.current}`);
    }, [isLoggedIn]); //의존성배열[isLoggedIn]

    let button; //버튼 컴포넌트를 담을 변수
    let inputId; //Input 컴포넌트를 담을 변수

    //로그인 상태에 따라 변수에 저장되는 컴포넌트가 다름
    if(isLoggedIn) {
        //로그인된 상태라면 LogoutButton 컴포넌트를 렌더링
        button = <LogoutButton onClick={handleLogoutClick} />;
    }
    else {
        //로그아웃된 상태라면 Input 컴포넌트와 LoginButton 컴포넌트를 렌더링
        inputId = <Input onChange={onChange} />
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return(
        <div>
            <div className="login">{/** 로그인 영역(주황색 박스) */}
                <div className="greeting">{/** 출력메세지 영역 */}
                    <Greeting isLoggedIn={isLoggedIn} />{/** 로그인 상태에 따라 다른 메세지가 출력됨 */}
                </div>
                <div className="button">{/** 로그인버튼 영역 */}
                    {inputId}{/** 로그아웃된 상태에서만 보이는 아이디 입력 필드 */}
                    {button}{/** 로그인 상태에 따라 다른 버튼이 보여짐 */}
                </div>
            </div>
            <div className="idTxt">{/** 아이디 출력 영역(로그아웃된 상태에서만 보임) */}
                <p id="idTxt">{userId}</p>{/** 입력하고 있는 아이디를 실시간으로 보여줌 */}
            </div>
        </div>
    );
}

export default LoginControl; //LoginControl 컴포넌트 반환