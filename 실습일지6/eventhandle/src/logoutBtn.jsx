import React from "react";

function LogoutButton(props) {
    return(
        <div>
            <button onClick={props.onClick}>
                로그아웃
            </button>
        </div>
    );
}

export default LogoutButton;