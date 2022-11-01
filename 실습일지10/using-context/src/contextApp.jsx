//Context API를 사용해 전달하는 예제
import React from "react";

const ThemeContext = React.createContext("blue");

function ContextApp() {
    return(
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
    return(
        <div>
            <ThemeContext.Consumer>
                {value => (
                    <div style={{
                        margin: 50,
                        padding: 50,
                        backgroundColor: value,
                    }}
                    >
                        <p>컨텍스트를 가지고 데이터를 전달하는 예 (Context API 사용)</p>
                        <button>확인</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        </div>
    )
}

export default ContextApp;