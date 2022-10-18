import React, {useState} from "react";
import "./Login.css";

function SignUp() {
    return(
        <div id="signup-wrapper">
            <div>
                ID: <input type="text" /><br/>
                PW: <input type="password" /><br/>
                Email: <input type="email" />
            </div>
        </div>
    )
}

export default SignUp;