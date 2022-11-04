//Context API를 사용해 전달하는 예제
import React from "react"; //React 임포트

const ThemeContext = React.createContext("blue"); //Context API로 컨텍스트 객체 생성

function ContextApp() {
    return(
        //컨텍스트 제공 - 참조를 원하는 컴포넌트만 구독요청하여 데이터 사용 가능함
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
            {/* 컨텍스트 구독 요청 */}
            <ThemeContext.Consumer>
                {value => (
                    <div style={{
                        margin: 50,
                        padding: 50,
                        backgroundColor: value, //ContextApp 컴포넌트에서 참조해온 값 사용(배경색)
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

export default ContextApp; //ContextApp 컴포넌트 내보냄