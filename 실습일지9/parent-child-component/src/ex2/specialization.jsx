import React from "react";
import "./specialization.css";

function Dialog(props) {
    return(
        <div className="dialog-wrapper">
            <div className={`${props.style}`}>
                <h3 className="dialog-title">{props.title}</h3>
                <p className="dialog-content">{props.content}</p>
            </div>
        </div>
    );
}

function WarnDialog() {
    return(
        <Dialog
            style="dialog-warn"
            title="⚠️ 경고!"
            content="경고 다이얼로그입니다."
        />
    );
}

function GreetDialog() {
    return(
        <Dialog
            style="dialog-greet"
            title="🙌 환영합니다 :)"
            content="인사 다이얼로그입니다."
        />
    );
}

function ErrorDialog() {
    return(
        <Dialog
            style="dialog-error"
            title="🚫 오류 발생!"
            content="오류 다이얼로그입니다."
        />
    );
}

function NoticeDialog() {
    return(
        <Dialog
            style="dialog-notice"
            title="📌 공지사항"
            content="공지 다이얼로그입니다."
        />
    );
}

function Specialization() {
    return(
        <div className="spec-wrapper">
            <h2 className="spec-title">Specialization</h2>
            <WarnDialog/>
            <GreetDialog/>
            <ErrorDialog/>
            <NoticeDialog/>
        </div>
    );
}

export default Specialization;