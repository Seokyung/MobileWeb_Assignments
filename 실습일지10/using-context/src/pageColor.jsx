//Context API와 useContext() hook을 이용한 라이트모드 - 다크모드 테마 전환
import React, {useState, useContext} from "react"; //React, hook 함수들 임포트
import "./pageColor.css"; //스타일 임포트

const ColorContext = React.createContext(null); //Context API로 컨텍스트 객체 생성

//다크모드를 활성화하는 state변수를 컨텍스트로 제공하는 컴포넌트
function PageColor() {
    const [isDark, setIsDark] = useState(false); //다크모드 활성화 상태를 저장하는 state 변수

    return(
        //컨텍스트 제공 - state 변수(isDark, setIsDark) 제공
        <ColorContext.Provider value={{isDark, setIsDark}}>
            <Page/>
        </ColorContext.Provider>
    )
}

//브라우저에 나타나는 컴포넌트들을 모아놓은 컴포넌트
function Page() {
    return(
        <div className="page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

//페이지 상단부에 들어갈 컴포넌트
function Header() {
    const {isDark} = useContext(ColorContext); //컨텍스트 구독 요청 - PageColor에서 선언한 state변수(isDark) 참조

    return(
        <header
            className="header"
            //PageColor 컴포넌트에서 참조해온 state변수의 값에 따라 배경색과 글씨색 변경(다크모드-라이트모드)
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
                color: isDark ? "white" : "black",
            }}
        >
            <h2>컨텍스트 사용강의</h2>
        </header>
    )
}

//페이지 중앙부에 들어갈 컴포넌트
function Content() {
    const {isDark} = useContext(ColorContext); //컨텍스트 구독 요청 - PageColor에서 선언한 state변수(isDark) 참조

    return(
        <content
            className="content"
            //PageColor 컴포넌트에서 참조해온 state변수의 값에 따라 배경색과 글씨색 변경(다크모드-라이트모드)
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
                color: isDark ? "white" : "black",
            }}
        >
            <p>오늘은 리액트 10주차 강의이며, Context를 배우고 있습니다.</p>
        </content>
    )
}

//페이지 하단부에 들어갈 컴포넌트
function Footer() {
    const {isDark, setIsDark} = useContext(ColorContext); //컨텍스트 구독 요청 - PageColor에서 선언한 state변수(isDark, setIsDark) 참조

    //버튼을 클릭할때마다 다크모드가 활성 상태가 바뀌는 함수 (true-false)
    const toggleColor = () => {
        setIsDark(!isDark); //다크모드 활성화 상태 변경
    }
    
    return(
        <footer
            className="footer"
            //PageColor 컴포넌트에서 참조해온 state변수의 값에 따라 배경색과 글씨색 변경(다크모드-라이트모드)
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
                color: isDark ? "white" : "black",
            }}
        >
            {/* 버튼을 클릭할때마다 페이지 색상이 반전됨 */}
            <button className="button" onClick={toggleColor}>색상반전</button>
        </footer>
    )
}

export default PageColor; //PageColor 컴포넌트 내보냄