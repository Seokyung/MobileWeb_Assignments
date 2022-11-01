//실습1 서버
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//express 환경설정
app.use(express.json());
app.use(express.static(path.join(__dirname, 'backend-rest-api/build')));
app.use(bodyParser.urlencoded({ extended: false }));

var keyid = 3; //다음에 추가할 회원에게 부여할 keyid 값
//객체배열(회원명단) 초기값 설정
var userList = [
    { keyid: 1, name: "김철수", id: "iron_water", passwd: "1234" },
    { keyid: 2, name: "박영미", id: "youth_me", passwd: "5678" },
];

const mainPage = (req, res) => {
    console.log("GET: mainPage - 메인페이지");
    res.sendFile(path.join(__dirname, 'backend-rest-api/build/index.html'));
}

const listUsers = (req, res) => {
    console.log("GET: listUsers - 회원명단 조회요청을 받았으며, 리액트에게 명단을 보냅니다.");
    res.json(userList);
}

const addUser = (req, res) => {
    const { name, id, passwd } = req.body;

    userList.push({ keyid: keyid++, name, id, passwd });

    console.log("POST: addUser - 회원등록 요청을 완료했으며, 이를 반영한 전체목록입니다.");
    userList.map((user, i) => {
        console.log(user.keyid + "." + user.name + "." + user.id + "." + user.passwd);
    })

    return res.send('success');
}

app.get("/", mainPage); //REST API 바인딩 - GET (메인페이지)
app.get("/users", listUsers); //REST API 바인딩 - GET (회원목록)
app.post("/users", addUser); //REST API 바인딩 - POST (회원가입)

//웹서버 가동
app.listen(65010, () => {
    console.log("-----------------------------------");
    console.log("(리액트 연동용)웹서버 실행중...");
    console.log("접속주소: http://localhost:65010/");
    console.log("-----------------------------------");
});