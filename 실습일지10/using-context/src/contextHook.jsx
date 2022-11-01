//Context API와 useContext() hook을 이용해 전달하는 예제
import React, {useContext} from "react";

const ThemeContext = React.createContext("blue");

function ContextHook() {
    return (
        <ThemeContext.Provider value="lavender">
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    return(
        <div>
            <ThemeButton/>
        </div>
    )
}

function ThemeButton() {
    return(
        <div>
            <Button/>
        </div>
    )
}

function Button() {
    const value = useContext(ThemeContext);

    return(
        <div style={{
            margin: 50,
            padding: 50,
            backgroundColor: value,
        }}
        >
            <p>컨텍스트를 가지고 데이터를 전달하는 예 (Context API와 useContext() hook 사용)</p>
            <button>확인</button>
        </div>
    )
}

export default ContextHook;