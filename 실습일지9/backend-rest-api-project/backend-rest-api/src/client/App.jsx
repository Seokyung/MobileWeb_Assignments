import React, {useState, useEffect} from "react";
import "./App.css";

const serverUrl = "http://localhost:65010/users";

function App() {
    const [userData, setUserData] = useState(null);

    const getUserData = () => {
        fetch(serverUrl)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .then(console.log(userData))
    }

    useEffect(getUserData, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const id = e.target.id.value;
        const passwd = e.target.passwd.value;

        console.log("Submit버튼 클릭 후 서버로 POST 전송");

        fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, id, passwd}),
        })
        .then(getUserData())
    }

    return(
        <div id="app-wrapper">
            <div>
                <h2>회원등록</h2>
                <form onSubmit={onSubmitHandler}>
                    <input className="member-input" type="text" name="name" placeholder="이름" />
                    <input className="member-input" type="text" name="id" placeholder="아이디" />
                    <input className="member-input" type="text" name="passwd" placeholder="비밀번호" />
                    <button className="member-btn" type="submit">등록</button>
                </form>
            </div>
            <div>
                <h2>회원목록</h2>
                <ol>
                    {(userData === null) ?
                        (<p>서버에서 데이터를 받아오는 중입니다...</p>)
                        :
                        (
                            userData.map((user, i) => (
                                <li key={user.keyid} className="member-li">이름: {user.name}, 아이디: {user.id}, 비밀번호: {user.passwd}</li>
                            ))
                        )
                    }
                </ol>
            </div>
        </div>
    )
}

export default App;