import React from "react";

function LogoutButton(props) {
    return(
        <div>
            <button onClick={props.onClick}>
                ๋ก๊ทธ์์
            </button>
        </div>
    );
}

export default LogoutButton;