//실습1 express 서버

//필요한 모듈 불러옴 (express, body-parser, path)
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//express 환경설정
app.use(express.json());
app.use(express.static(path.join(__dirname, 'backend-rest-api/build'))); //express.static을 사용해 특정 폴더 안의 파일들 static 파일로 보내줌
app.use(bodyParser.urlencoded({ extended: false }));

var keyid = 3; //다음에 추가할 회원에게 부여할 keyid 값
//객체배열(회원명단) 초기값 설정
var userList = [
    { keyid: 1, name: "김철수", id: "iron_water", passwd: "1234" },
    { keyid: 2, name: "박영미", id: "youth_me", passwd: "5678" },
];

//브라우저(리액트)가 서버에게 접속하면 보내는 첫페이지(즉, 빌드한 페이지)
const mainPage = (req, res) => {
    console.log("GET: mainPage - 메인페이지");
    res.sendFile(path.join(__dirname, 'backend-rest-api/build/index.html')); //빌드한 index.html 파일 전송
}

//브라우저에 회원목록을 띄울 수 있게 GET method로 회원 목록 조회 요청
const listUsers = (req, res) => {
    console.log("GET: listUsers - 회원명단 조회요청을 받았으며, 리액트에게 명단을 보냅니다.");
    res.json(userList); //.json은 객체/배열을 클라이언트에게 그대로 보낼때 사용
}

//회원을 추가할 수 있도록 POST method로 회원 등록 요청
const addUser = (req, res) => {
    const { name, id, passwd } = req.body; //리액트에서 req로 받아온 값들 (회원 이름, 아이디, 비밀번호)

    userList.push({ keyid: keyid++, name, id, passwd }); //객체배열(회원명단)에 받아온 값들 추가

    console.log("POST: addUser - 회원등록 요청을 완료했으며, 이를 반영한 전체목록입니다.");

    //수신되었다면 목록으로 처리
    userList.map((user, i) => { //map 함수를 이용해 전체 목록 콘솔창에 출력
        console.log(user.keyid + "." + user.name + "." + user.id + "." + user.passwd);
    })

    return res.send('success'); //성공메세지 리턴
}

app.get("/", mainPage); //REST API 바인딩 - GET (메인페이지)
app.get("/users", listUsers); //REST API 바인딩 - GET (회원목록)
app.post("/users", addUser); //REST API 바인딩 - POST (회원가입)

//웹서버 가동
app.listen(65010, () => { //서버가 가동될 포트번호(65010)
    console.log("-----------------------------------");
    console.log("(리액트 연동용)웹서버 실행중...");
    console.log("접속주소: http://localhost:65010/");
    console.log("-----------------------------------");
});