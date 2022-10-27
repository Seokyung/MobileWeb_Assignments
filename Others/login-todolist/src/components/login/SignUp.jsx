import React, {useState} from "react";
import "./Login.css";

function SignUp(props) {
    const onSignUpClick = () => {

    }

    return(
        <div id="signup-wrapper">
            <div>
                <div>
                    ID: <input type="text" placeholder="Input ID"/><br/>
                    PW: <input type="password" placeholder="Input Password"/><br/>
                    Email: <input type="email" placeholder="Input Email"/>
                </div>
                <div>
                    <button onClick={onSignUpClick}>SignUp!</button>
                </div>
            </div>
            <div>
                Are you a memeber?
                <button onClick={props.gotoLoginOrSignup}>Goto Login</button>
            </div>
        </div>
    )
}

export default SignUp;