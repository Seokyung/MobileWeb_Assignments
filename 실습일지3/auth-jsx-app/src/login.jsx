import React from 'react';
import './login.css'; //login.jsx에서 쓰일 css 스타일 코드 임포트

//Login 컴포넌트 작성(jsx로 작성 - js안에 html을 넣어 작성함)
function Login() {
  return (
    <div className="Login"> {/* div태그 (컴포넌트 전체를 감쌈) */}
      <h2>로그인</h2> {/* hr태그 (제목) */}
      <hr/> {/* hr태그 (밑줄) */}
      <form name="login"> {/* form태그 (login양식 작성) */}
        <table> {/* table태그 */}
          <tr> {/* tr태그 (첫번째 행 - id 입력란이 들어감) */}
            <td className="login-form">사용자 ID:</td> {/* td태그 (첫번째 열) */}
            <td> {/* td태그 (두번째 열) */}
              <input type="text" placeholder="이메일을 넣으세요" /> {/* input태그 (id 입력란) */}
            </td>
          </tr>
          <tr> {/* tr태그 (두번째 행 - password 입력란이 들어감) */}
            <td className="login-form">비밀 번호:</td> {/* td태그 (첫번째 열) */}
            <td> {/* td태그 (두번째 열) */}
              <input type="password" placeholder="영숫자를 혼합하여" /> {/* input태그 (password 입력란) */}
            </td>
            <td> {/* td태그 (세번째 열) */}
              <button type="submit">완료</button> {/* button태그 (완료 버튼) */}
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Login; //Login컴포넌트 (element객체) 내보냄
