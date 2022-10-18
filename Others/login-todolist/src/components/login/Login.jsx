import React, {useState} from "react";
import "./Login.css";

function Login() {
    return(
        <div id="login-wrapper">
            <div>
                ID: <input type="text" /><br/>
                PW: <input type="password" />
            </div>
        </div>
    )
}

export default Login;