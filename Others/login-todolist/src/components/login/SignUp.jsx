import React, {useState} from "react";
import "./Login.css";

function SignUp(props) {
    const onSignUpClick = () => {

    }

    return(
        <div id="signup-wrapper">
            <div>
                ID: <input type="text" /><br/>
                PW: <input type="password" /><br/>
                Email: <input type="email" />
            </div>
            <div>
                <button onClick={onSignUpClick}>SignUp!</button>
            </div>
            <div>
                Are you a memeber?
                <button onClick={props.gotoLoginOrSignup}>Goto Login</button>
            </div>
        </div>
    )
}

export default SignUp;