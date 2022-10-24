import React, {useState} from "react";
import "./Login.css";

function Login(props) {
    const onLoginClick = () => {
        props.setIsLogin(true);
    }

    return(
        <div id="login-wrapper">
            <div>
                ID: <input type="text" /><br/>
                PW: <input type="password" />
            </div>
            <div>
                <button onClick={onLoginClick}>Login!</button>
            </div>
            <div>
                Are you not a member?
                <button onClick={props.gotoLoginOrSignup}>Goto SignUp</button>
            </div>
        </div>
    )
}

export default Login;