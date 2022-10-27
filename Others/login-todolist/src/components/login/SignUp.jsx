import React, {useState, useRef} from "react";
import "./Login.css";

function SignUp(props) {
    const [signInId, setSignInId] = useState("");
    const [signInPW, setSignInPW] = useState("");
    const [signInEmail, setSignInEmail] = useState("");

    const signInIdFocus = useRef(null);

    const handleSignInIdChange = (e) => {
        setSignInId(e.target.value);
    }
    const handleSignInPWChange = (e) => {
        setSignInPW(e.target.value);
    }
    const handleSignInEmailChange = (e) => {
        setSignInEmail(e.target.value);
    }

    const onSignUpClick = () => {
        if((signInId.length > 0) && (signInPW.length > 0) && (signInEmail.length > 0)) {
            alert("Welcome Aboard!");
            props.gotoLoginOrSignup();
        }
        else {
            alert("Please fill out the whole form!");
            signInIdFocus.current.focus();
        }
    }

    return(
        <div id="signup-wrapper">
            <div>
                <div>
                    ID: <input type="text" value={signInId} ref={signInIdFocus} onChange={handleSignInIdChange} placeholder="Input ID"/><br/>
                    PW: <input type="password" value={signInPW} onChange={handleSignInPWChange} placeholder="Input Password"/><br/>
                    Email: <input type="email" value={signInEmail} onChange={handleSignInEmailChange} placeholder="Input Email"/>
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