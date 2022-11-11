//컴포넌트 특수화 (Specialization)
import React from "react"; //React 임포트
import "./specialization.css"; //스타일 적용

//범용 다이얼로그 컴포넌트
function Dialog(props) {
    return(
        <div className="dialog-wrapper">{/** 다이얼로그를 감싸는 div태그 */}
            <div className={`${props.style}`}>{/** 다이얼로그의 구체화할 부분을 감싸는 div태그(props로 스타일을 전달받음) */}
                <h3 className="dialog-title">{props.title}</h3>{/** props로 다이얼로그 제목을 전달받음 */}
                <p className="dialog-content">{props.content}</p>{/** props로 다이얼로그 내용을 전달받음 */}
                {props.btnTxt && <button className="dialog-button" onClick={props.onBtnClick}>{props.btnTxt}</button>}
            </div>
        </div>
    );
}

//범용 다이얼로그 컴포넌트를 구체화시켜 만든 경고 다이얼로그 컴포넌트
function WarnDialog() {
    return(
        //범용 다이얼로그에 props를 보내 경고 다이얼로그에 맞게 컴포넌트를 구체화함
        <Dialog
            style="dialog-warn"
            title="⚠️ 경고!"
            content="경고 다이얼로그입니다."
        />
    );
}

//범용 다이얼로그 컴포넌트를 구체화시켜 만든 인사말 다이얼로그 컴포넌트
function GreetDialog() {
    return(
        //범용 다이얼로그에 props를 보내 인사말 다이얼로그에 맞게 컴포넌트를 구체화함
        <Dialog
            style="dialog-greet"
            title="🙌 환영합니다 :)"
            content="인사말 다이얼로그입니다."
        />
    );
}

//범용 다이얼로그 컴포넌트를 구체화시켜 만든 오류 다이얼로그 컴포넌트
function ErrorDialog() {
    const solveError = () => {
        alert("오류가 해결되었습니다!");
    }
    return(
        //범용 다이얼로그에 props를 보내 오류 다이얼로그에 맞게 컴포넌트를 구체화함
        <Dialog
            style="dialog-error"
            title="🚫 오류 발생!"
            content="오류 다이얼로그입니다."
            btnTxt="오류고치기"
            onBtnClick={solveError}
        />
    );
}

//범용 다이얼로그 컴포넌트를 구체화시켜 만든 공지사항 다이얼로그 컴포넌트
function NoticeDialog() {
    return(
        //범용 다이얼로그에 props를 보내 공지사항 다이얼로그에 맞게 컴포넌트를 구체화함
        <Dialog
            style="dialog-notice"
            title="📌 공지사항"
            content="공지사항 다이얼로그입니다."
        />
    );
}

function Specialization() {
    return(
        <div className="spec-wrapper">{/** 컴포넌트를 감싸는 div태그 */}
            <h2 className="spec-title">Specialization</h2>
            <WarnDialog/>{/** 경고 다이얼로그 컴포넌트 */}
            <GreetDialog/>{/** 인사말 다이얼로그 컴포넌트 */}
            <ErrorDialog/>{/** 오류 다이얼로그 컴포넌트 */}
            <NoticeDialog/>{/** 공지사항 다이얼로그 컴포넌트 */}
        </div>
    );
}

export default Specialization; //Specialization 컴포넌트 내보냄