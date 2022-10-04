import React, { useEffect, useRef } from "react";

function Lotto() {
    const numOfLotto = useRef(1);

    useEffect(() => {
        console.log("렌더링되었습니다!!!");
    });

    useEffect(() => {
        console.log("마운트되었습니다!!!");
        return() => { console.log("언마운트되었습니다!!!"); };
    }, []);

    const handler = (str, event) => {
        console.log(numOfLotto.current.toString() + "회차 " + str + event.target.value);
        alert(numOfLotto.current.toString() + "회차 " + str + event.target.value);
        numOfLotto.current = numOfLotto.current + 1;
    }

    return(
        <div>
            <button
                value="홍길동"
                onClick={(event) => handler("당첨자: ", event)}>
                당첨자 확인
            </button>
        </div>
    );
}

export default Lotto;