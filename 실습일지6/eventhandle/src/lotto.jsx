//컴포넌트가 렌더링된 후 작업을 하기 위한 useEffect함수, 변수 관리를 위한 useRef함수 임포트
import React, { useEffect, useRef } from "react";

//버튼이 눌릴때마다 당첨회차가 늘어나고 콘솔과 alert창에 회차가 출력되는 컴포넌트
function Lotto() {
    const numOfLotto = useRef(1); //useRef함수를 이용해 당첨 회차 변수 numOfLotto 선언 및 초기화 (렌더링 불필요하기 때문에 ref변수 사용)

    //useEffect(f)함수를 이용해 컴포넌트가 렌더링될 때마다 콘솔에 "렌더링되었습니다!!!" 출력
    useEffect(() => {
        console.log("렌더링되었습니다!!!");
    });

    //useEffect(f,[])함수를 이용해 컴포넌트가 마운트될때는 "마운트되었습니다!!!", 언마운트될때는 "언마운트되었습니다!!!" 출력
    useEffect(() => {
        console.log("마운트되었습니다!!!");
        return() => { console.log("언마운트되었습니다!!!"); };
    }, []);

    //파라미터가 2개 이상인 이벤트 핸들링 함수
    const handler = (str, event) => {
        console.log(numOfLotto.current.toString() + "회차 " + str + event.target.value); //콘솔창에 ref변수값(numOfLotto)과 문자열, button의 value 출력
        alert(numOfLotto.current.toString() + "회차 " + str + event.target.value); //콘솔창에 출력되는 것과 동일한 내용이 alert창에도 출력됨
        numOfLotto.current = numOfLotto.current + 1; //ref변수(당첨 회차) 1씩 증가
    }

    return(
        <div>
            {/** 당첨자확인 버튼을 누르면 handler함수 호출  */}
            <button
                value="홍길동"
                onClick={(event) => handler("당첨자: ", event)}>{/** 버튼이 눌리면 문자열과 이벤트 객체 두 개의 파라미터가 넘어가면서 함수 호출 */}
                당첨자 확인
            </button>
        </div>
    );
}

export default Lotto; //Lotto 컴포넌트 반환