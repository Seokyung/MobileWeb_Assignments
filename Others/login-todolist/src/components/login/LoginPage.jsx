import React, {useState} from "react";
import "./Login.css";
import Login from "./Login";
import SignUp from "./SignUp";
import TodoPage from "../todo/TodoPage";

function LoginPage() {
    const [isLogin, setIsLogin] = useState(false);
    const [loginFlag, setLoginFlag] = useState(true);

    //const [userId, setUserId] = useState("");
    const [todoList, setTodoList] = useState([]);

    const gotoLoginOrSignup = () => {
        setLoginFlag(!loginFlag);
    }
    
    return(
        <div id="loginpage-wrapper">
            <h3>Welcome Stranger!</h3>
            <h4>Please login to use our wonderful sevices :D</h4>
            {loginFlag ?
                <>
                    <Login
                        setIsLogin={setIsLogin}
                        gotoLoginOrSignup={gotoLoginOrSignup}
                        // userId={userId}
                        // setUserId={setUserId}
                    />
                </>
                :
                <>
                    <SignUp gotoLoginOrSignup={gotoLoginOrSignup}/>
                </>
            }
            {/* {isLogin ?
                <>
                    <TodoPage userId={userId} setIsLogin={setIsLogin} todoList={todoList} setTodoList={setTodoList} />
                </>
                :
                <>
                </>
            } */}
        </div>
    )
}

export default LoginPage;