import React from "react";
import "./login.css"; //login.js에서 쓰일 css 스타일 코드 임포트

//Login 컴포넌트 작성(html 없이 js로만 작성)
function Login() { //React.createElement(component, props, ...children)를 활용하여 html의 각 태그들을 컴포넌트로 불러와 사용함
  return React.createElement( "div", {className: "Login"}, //div태그 (컴포넌트 전체를 감쌈)
    React.createElement("h2", null, "로그인"), //h2태그 (제목)
    React.createElement("hr", null), //hr태그 (밑줄)
    React.createElement("form", {name: "login"}, //form태그 (login양식 작성)
      React.createElement("table", null, //table태그
        React.createElement("tr", null, //tr태그 (첫번째 행 - id 입력란이 들어감)
          React.createElement("td", {className: "login-form"}, "사용자 ID:"), //td태그 (첫번째 열)
          React.createElement("td", null, //td태그 (두번째 열)
            React.createElement("input", {type: "text", placeholder: "이메일을 넣으세요:"}) //input태그 (id 입력란)
          )
        ),
        React.createElement("tr", null, //tr태그 (두번째 행 - password 입력란이 들어감)
          React.createElement("td", {className: "login-form"}, "비밀 번호:"), //td태그 (첫번째 열)
          React.createElement("td", null, //td태그 (두번째 열)
            React.createElement("input", {type: "password", placeholder: "영숫자를 혼합하여"}) //input태그 (password 입력란)
          ),
          React.createElement("td", null, //td태그 (세번째 열)
            React.createElement("button", {type: "submit"}, "완료") //button태그 (완료버튼)
          )
        )
      )
    )
  );
}

export default Login; //컴포넌트(element객체) 내보냄
