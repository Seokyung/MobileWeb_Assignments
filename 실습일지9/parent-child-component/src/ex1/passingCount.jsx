//State 끌어올리기 - Shared State
import React, {useState} from "react"; //React와 hook함수들 임포트
import "./passingCount.css"; //스타일 적용

//자식1 컴포넌트 (왼쪽 카운터를 보여줌)
const FirstChild = (props) => {
    console.log(`자식1 ${props.data}`); //렌더링될때마다 콘솔창에 자식1의 카운터(왼쪽 카운터)가 출력됨

    return(
        <div className="first">{/** 자식1 컴포넌트를 감싸는 div태그 */}
            <p>자식1 컴포넌트</p>
            <p>(카운터: {props.data})</p>{/** 부모 컴포넌트에게서 props로 전달받은 왼쪽 카운터 보여줌 */}
        </div>
    )
};

//자식2 컴포넌트 (카운터 버튼)
const SecondChild = (props) => {
    console.log("자식2 (버튼)"); //렌더링될때마다 콘솔창에 로그가 출력됨

    //버튼을 클릭할때마다 각 카운터의 수가 1씩 증가하는 함수
    //부모 컴포넌트에게서 props로 setState들을 전달받아 카운터의 값을 1씩 증가시킴
    //증가된 카운터는 부모 컴포넌트를 통해 자식 1,3에게 props로 전달됨
    const onLeftClick = () => props.setLeft((prevData) => parseInt(prevData) + 1); //parseInt()함수: 문자열을 정수로 변환해줌
    const onRightClick = () => props.setRight((prevData) => parseInt(prevData) + 1);

    return(
        <div className="second">{/** 자식2 컴포넌트를 감싸는 div태그 */}
            <p>자식2 컴포넌트</p>
            <button className="cnt-button" onClick={onLeftClick}>◀︎ 카운터++</button>{/** 왼쪽 카운터를 증가시키는 버튼 */}
            <button className="cnt-button" onClick={props.resetData}>카운터 리셋</button>{/** 모든 카운터를 리셋시키는 버튼(부모 컴포넌트에게서 props로 리셋함수를 전달받아 사용함) */}
            <button className="cnt-button" onClick={onRightClick}>카운터++ ►</button>{/** 오른쪽 카운터를 증가시키는 버튼 */}
        </div>
    )
}

//자식3 컴포넌트 (오른쪽 카운터를 보여줌)
const ThirdChild = (props) => {
    console.log(`자식3 ${props.data}`); //렌더링될때마다 콘솔창에 자식3의 카운터(오른쪽 카운터)가 출력됨

    return(
        <div className="third">{/** 자식3 컴포넌트를 감싸는 div태그 */}
            <p>자식3 컴포넌트</p>
            <p>(카운터: {props.data})</p>{/** 부모 컴포넌트에게서 props로 전달받은 오른쪽 카운터 보여줌 */}
        </div>
    )
};

//부모 컴포넌트 (공용데이터를 생성/관리함)
function PassingCount() {
    const [leftCnt, setLeftCnt] = useState(0); //왼쪽 카운터를 저장하는 state변수
    const [rightCnt, setRightCnt] = useState(0); //오른쪽 카운터를 저장하는 state변수

    //모든 카운터를 0으로 리셋하는 함수
    const resetData = () => {
        setLeftCnt(0); //왼쪽 카운터 리셋
        setRightCnt(0); //오른쪽 카운터 리셋
    }

    return(
        <div className="parent">{/** 부모 컴포넌트를 감싸는 div태그 */}
            부모컴포넌트
            <br/>
            {/** 현재 왼쪽, 오른쪽 카운터를 보여줌 */}
            (왼쪽카운트: {leftCnt}, 오른쪽카운트: {rightCnt})
            <div className="layout">{/** 자식 컴포넌트들을 감싸는 div태그 */}
                {/** 자식1 컴포넌트에게 props로 leftCnt를 전달함 */}
                <FirstChild data={leftCnt}/>
                {/* 자식2 컴포넌트에게 props로 setState들과 리셋함수 전달함 */}
                <SecondChild
                    setLeft={setLeftCnt}
                    resetData={resetData}
                    setRight={setRightCnt}
                />
                {/** 자식3 컴포넌트에게 props로 rightCnt를 전달함 */}
                <ThirdChild data={rightCnt}/>
            </div>
        </div>
    )
}

export default PassingCount; //PassingCount 컴포넌트 내보냄