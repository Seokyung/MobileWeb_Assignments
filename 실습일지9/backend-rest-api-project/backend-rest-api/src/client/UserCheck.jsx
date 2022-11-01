import React, {useState, useEffect} from "react"; //React와 hook 함수들 임포트
import "./App.css"; //스타일 적용

const serverUrl = "http://localhost:65020/users"; //웹서버 접속 주소

function UserCheck() {
    const [userData, setUserData] = useState(null); //서버에서 받아올 사용자 정보(객체배열)를 저장하는 곳
    const [userCheckMsg, setUserCheckMsg] = useState(""); //회원 확인여부 메세지를 저장할 stata 변수

    //회원목록을 서버에서 받아와 userData에 저장하는 함수
    const getUserData = () => {
        fetch(serverUrl) //REST API로 서버로 회원목록을 요청
        .then((res) => res.json()) //회원목록을 json 포맷으로 수신
        .then((data) => setUserData(data)) //받을 데이터를 setState 함수로 업데이트함
        .then(console.log(userData)) //콘솔창에 출력해서 확인
    }

    useEffect(getUserData, []); //mount시에만 서버 데이터를 가져오도록 effect 처리

    //등록버튼 클릭시 회원이 추가되고 전체 회원 목록을 보여주는 함수
    const onSubmitHandler = (e) => {
        e.preventDefault(); //브라우저가 새로고침하는 것을 막아줌

        //사용자가 입력한 회원 이름, 아이디, 비밀번호를 받아옴
        const name = e.target.name.value;
        const id = e.target.id.value;
        const passwd = e.target.passwd.value;

        console.log("Submit버튼 클릭 후 서버로 POST 전송");

        fetch(serverUrl, { //서버로 입력정보 전송
            method: 'POST', //POST method 사용
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, id, passwd}), //body에 등록할 회원 정보를 담에 서버에 보냄
        })
        .then(getUserData()) //회원이 등록된 후 추가된 회원을 포함한 모든 회원목록 조회
    }

    //확인버튼 클릭시 회원여부를 확인하고 메세지를 띄우는 함수
    const onCheckHandler = (e) => {
        e.preventDefault(); //브라우저가 새로고침하는 것을 막아줌

        //사용자가 입력한 회원 아이디, 비밀번호를 받아옴
        const id = e.target.checkId.value;
        const passwd = e.target.checkPasswd.value;

        //회원여부를 저장하는 변수 (bool값 가짐)
        let isUser = false;

        //map 함수를 이용해 회원목록 전체에서 사용자가 입력한 정보와 일치하는 회원을 찾음
        userData.map((user) => {
            //정보가 일치하는 회원이 있을경우 콘솔창에 메세지 출력 후 isUser값을 true로 바꿔줌
            if((user.id === id) && (user.passwd === passwd)) {
                console.log("Found! " + user.id);
                isUser = true;
            }
        })

        //isUser가 값에 따라 다른 확인여부 메세지 설정
        if(isUser) { //회원일경우
            setUserCheckMsg("회원으로 확인되었습니다.");
        }
        else { //회원이 아닐경우
            setUserCheckMsg("그런 회원은 없습니다.");
        }
    }

    return(
        <div id="app-wrapper">
            <div>
                <h2>회원등록</h2>
                <form onSubmit={onSubmitHandler}>{/** 버튼 클릭시 회원이 등록되고 회원목록이 다시 조회됨 */}
                    <input className="member-input" type="text" name="name" placeholder="이름" />
                    <input className="member-input" type="text" name="id" placeholder="아이디" />
                    <input className="member-input" type="text" name="passwd" placeholder="비밀번호" />
                    <button className="member-btn" type="submit">등록</button>
                </form>
            </div>
            <div>
                <h2>회원확인</h2>
                <form onSubmit={onCheckHandler}>{/** 버튼 클릭시 회원여부를 확인하고 메세지 띄워줌 */}
                    <input className="member-input" type="text" name="checkId" placeholder="아이디" />
                    <input className="member-input" type="text" name="checkPasswd" placeholder="비밀번호" />
                    <button className="member-btn" type="submit">확인</button>
                </form>
                <p style={{color: "red", marginLeft: "0.5rem"}}>{userCheckMsg}</p>{/** 회원 확인여부 메세지 */}
            </div>
            <div>
                <h2>회원목록</h2>
                <ol>
                    {(userData === null) ? //데이터가 수신되었는지 확인
                        (<p>서버에서 데이터를 받아오는 중입니다...</p>) //userData에 회원정보가 없으면 메세지 출력
                        :
                        (
                            userData.map((user, i) => ( //수신되었다면(userData에 회원정보가 있으면) 목록으로 처리
                                //keyid를 key로 사용해 map 함수로 전체 회원 목록 브라우저에 하나씩 띄워줌
                                <li key={user.keyid} className="member-li">이름: {user.name}, 아이디: {user.id}, 비밀번호: {user.passwd}</li>
                            ))
                        )
                    }
                </ol>
            </div>
        </div>
    )
}

export default UserCheck; //UserCheck 컴포넌트 내보냄