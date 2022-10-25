import React, {useState} from "react";
import "./passingCount.css";

const FirstChild = (props) => {
    console.log(`자식1 ${props.data}`);

    return(
        <div className="first">
            <p>자식1 컴포넌트</p>
            <p>(카운터: {props.data})</p>
        </div>
    )
};

const SecondChild = (props) => {
    console.log("자식2 (버튼)");

    const onLeftClick = () => props.setLeft((prevData) => parseInt(prevData) + 1);
    const onRightClick = () => props.setRight((prevData) => parseInt(prevData) + 1);

    return(
        <div className="second">
            <p>자식2 컴포넌트</p>
            <button className="cnt-button" onClick={onLeftClick}>◀︎ 카운터++</button>
            <button className="cnt-button" onClick={props.resetData}>카운터 리셋</button>
            <button className="cnt-button" onClick={onRightClick}>카운터++ ►</button>
        </div>
    )
}

const ThirdChild = (props) => {
    console.log(`자식3 ${props.data}`);

    return(
        <div className="third">
            <p>자식3 컴포넌트</p>
            <p>(카운터: {props.data})</p>
        </div>
    )
};

function PassingCount() {
    const [leftCnt, setLeftCnt] = useState(0);
    const [rightCnt, setRightCnt] = useState(0);

    const resetData = () => {
        setLeftCnt(0);
        setRightCnt(0);
    }

    return(
        <div className="parent">
            부모컴포넌트
            <br/>
            (왼쪽카운트: {leftCnt}, 오른쪽카운트: {rightCnt})
            <div className="layout">
                <FirstChild data={leftCnt}/>
                <SecondChild
                    setLeft={setLeftCnt}
                    resetData={resetData}
                    setRight={setRightCnt}
                />
                <ThirdChild data={rightCnt}/>
            </div>
        </div>
    )
}

export default PassingCount;