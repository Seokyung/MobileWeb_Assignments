import React, {useState} from "react";
import "./Login.css";
import Login from "./Login";
import SignUp from "./SignUp";
import TodoPage from "../todo/TodoPage";

function LoginPage() {
    const [isLogin, setIsLogin] = useState(false);
    const [loginFlag, setLoginFlag] = useState(true);

    const onLoginClick = () => {
        setIsLogin(true);
    }
    const gotoLoginOrSignup = () => {
        setLoginFlag(!loginFlag);
    }
    const onSignUpClick = () => {

    }
    
    return(
        <div id="loginpage-wrapper">
            {isLogin ?
                <>
                    <TodoPage setIsLogin={setIsLogin}/>
                </>
                :
                <>
                    <h3>Welcome Stranger!</h3>
                    <h4>Please login to use our wonderful sevices :D</h4>
                    {loginFlag ?
                        <>
                            <Login/>
                            <div>
                                <button onClick={onLoginClick}>Login!</button>
                                <button onClick={gotoLoginOrSignup}>Goto SignUp</button>
                            </div>
                        </>
                        :
                        <>
                            <SignUp/>
                            <div>
                                <button onClick={onSignUpClick}>SignUp!</button>
                                <button onClick={gotoLoginOrSignup}>Goto Login</button>
                            </div>
                        </>
                    }
                </>
            }
        </div>
    )
}

export default LoginPage;