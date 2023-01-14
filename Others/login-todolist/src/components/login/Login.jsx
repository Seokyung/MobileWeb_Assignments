import React, {useState, useRef, useContext} from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css";
import { useUserState } from "../user/UserProvider";

function Login(props) {
    const [userId, actions] = useUserState();
    const [userPW, setUserPW] = useState("");
    const idFocus = useRef(null);

    const handleIdChange = (e) => {
        actions.changeUserId(e.target.value);
    }
    const handlePWChange = (e) => {
        setUserPW(e.target.value);
    }

    const navigate = useNavigate();

    const onLoginClick = () => {
        if(userId.length > 0 && userPW.length > 0) {
            props.setIsLogin(true);
            navigate('/todo');
        }
        else {
            alert(`Please Input Id and Password!`);
            idFocus.current.focus();
        }
    }

    return(
        <div id="login-wrapper">
            <div>
                <div>
                    <input type="text" value={userId} ref={idFocus} onChange={handleIdChange} placeholder="Input ID"/><br/>
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