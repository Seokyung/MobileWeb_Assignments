import React from "react";

function LoginButton(props) {
    return(
        <div>
            <button onClick={props.onClick}>
                로그인
            </button>
        </div>
    );
}

export default LoginButton;