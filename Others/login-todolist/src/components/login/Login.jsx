import React, {useState, useRef} from "react";
import "./Login.css";

function Login(props) {
    const [userPW, setUserPW] = useState("");
    const idFocus = useRef(null);

    const handleIdChange = (e) => {
        props.setUserId(e.target.value);
    }

    const handlePWChange = (e) => {
        setUserPW(e.target.value);
    }

    const onLoginClick = () => {
        if(props.userId.length > 0 && userPW.length > 0) {
            props.setIsLogin(true);
        }
        else {
            alert("Please Input Id and Password!");
            idFocus.current.focus();
        }
    }

    return(
        <div id="login-wrapper">
            <div>
                <div>
                    <input type="text" value={props.userId} ref={idFocus} onChange={handleIdChange} placeholder="Input ID"/><br/>
                    <input type="password" value={userPW} onChange={handlePWChange} placeholder="Input Password"/>
                </div>
                <div>
                    <button onClick={onLoginClick}>Login!</button>
                </div>
            </div>
            <div>
                Are you not a member?
                <button onClick={props.gotoLoginOrSignup}>Goto SignUp</button>
            </div>
        </div>
    )
}

export default Login;