import React from "react"; //React 임포트
import { useState } from "react"; //state를 관리하기 위한 useState 함수 임포트
import { Products } from "./product"; //상품 정보들을 담고있는 Products 임포트
import "./timesale.css"; //timesale.jsx에서 쓰일 css 스타일 코드 임포트

//마감시간을 인자로 받아와 현재시간에서 마감시간까지 남은 시간을 반환하는 함수
function getDeadline(endDate) {
    //safari 브라우저에서는 YYYY-MM-DD HH-MM-SS 형식을 지원하지 않음 (YYYY-MM-DDTHH:mm:ss.sssZ 형식 사용)
    //safari 브라우저에서도 시간이 잘 보일 수 있도록 정규식을 사용해 포맷 변경 필요
    endDate = endDate.replace(/-/g, "/"); //포맷 변경

    let dead = new Date(endDate); //마감시간 설정
    let current = new Date(); //현재시간 설정
    let deadline = dead.getTime() - current.getTime(); //현재시간에서 마감까지 남은 시간 계산
    let hour = Math.floor(deadline / (1000*60*60)); //시
    let min = Math.floor((deadline % (1000*60*60)) / (1000*60)); //분
    let sec = Math.floor(((deadline % (1000*60*60)) % (1000*60)) / 1000); //초
    
    //한 자리 수의 시간일 때 앞에 0을 붙여 두 자리 수로 맞춰주기 위해 ('0' + 시간.toString(10)).slice(-2)를 해줌
    return ('0'+hour.toString(10)).slice(-2) + ":" + ('0'+min.toString(10)).slice(-2) + ":" + ('0'+sec.toString(10)).slice(-2); //10진수 문자열로 표기
}

//상품 정보를 담고있는 Card 컴포넌트
function Card(props) {
    //useState를 이용하여 구매 버튼 클릭여부(state) 기본값 파라미터로 넣어서 호출
    const [purchased, setPurchased] = useState(false); //purchased는 현재 상태(false), setPurchased는 purchased를 최신 상태로 설정해주는 setter 함수

    //구매 버튼 클릭 시 호출되는 함수
    function buyProduct() {
        setPurchased(true); //purchased의 state가 false에서 true로 바뀜
    }

    return(
        //props를 통해 TimeSale 컴포넌트에서 상품 정보를 받아옴
        <div className="card"> {/* div태그 (Card 컴포넌트 전체를 감쌈) */}
            <img src={props.img} className="carding" alt="product" /> {/* img태그 (상품 이미지) */}
            <div className="cardbody"> {/* div태그 (상품의 상세정보를 담는 박스) */}
                <h2 className="cardtime">{props.time} 마감예정!</h2> {/* h2태그 (마감시간) */}
                <h2 className="cardtitle">{props.title}</h2> {/* h2태그 (카드 제목) */}
                <p className="carddescription">{props.description}</p> {/* p태그 (상품설명) */}
                <h3 className="cardprice"> {/* h3태그 (상품가격) */}
                    <del style={{color: "gray"}}>{props.oldprice}</del>{props.price} {/* del태그 (상품의 이전가격에 줄이 그어져 있음), 상품의 세일가격 */}
                </h3>
            </div>
            <div className="btnwrapper"> {/* div태그 (구매버튼을 담는 박스) */}
                {/* 렌더링되는 시점에 함수가 호출되지 않도록 on이벤트이름={실행하고싶은함수} 형태로 이벤트 설정 */}
                {/* 삼항연산자(a?x:y)를 사용하여 purchased의 값이 true면 구매성공 텍스트가, false면 긴급구매 버튼이 나타나도록 해줌 */}
                {purchased ? <p className="purchasetxt">구매성공!!!</p> : <button className="cardbutton" onClick={buyProduct}>긴급구매</button>}
            </div>
        </div>
    );
}

// function Card(props) {
//     return (
//         <div className="wrapper">
//             {Products.map((item, index) => {
//                 return (
//                     <div key={index} className="card">
//                         <img src={item.img} className="carding" alt="product" />
//                         <div className="cardbody">
//                             <h2 className="cardtime">{getDeadline(item.time)} 마감예정!</h2>
//                             <h2 className="cardtitle">{item.title}</h2>
//                             <p className="carddescription">{item.description}</p>
//                             <h3 className="cardprice">
//                                 <del style={{color: "gray"}}>{item.oldprice}</del>{item.price}
//                             </h3>
//                             <button className="cardbutton">긴급구매</button>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

//반복되는 Card들을 하나씩 배치하는 컴포넌트
function TimeSale(props) {
    return(
        <div className="wrapper"> {/* div태그 (컴포넌트 전체를 감쌈) */}
            {/* map함수를 이용해 반복되는 컴포넌트 렌더링 */}
            {/* Products에서 상품 정보를 받아와 map함수를 이용해 index를 key로 item을 불러오고 item의 각 요소들을 배치함 */}
            {Products.map((item, index) => {
                return (
                    <Card
                        key={index} //index를 key로 사용해 어떤 원소가 변경되었는지 빠르게 감지하고 이에 맞는 item을 불러옴
                        img={item.img} //Products의 index번째 item의 img(item.img)를 img에 넣어줌
                        time={getDeadline(item.time)} //Products의 index번째 item의 time(item.time)을 time에 넣어줌 (getDeadline함수를 이용해 마감시간까지 남은 시간을 넣어줌)
                        title={item.title} //Products의 index번째 item의 title(item.title)을 title에 넣어줌
                        description={item.description} //Products의 index번째 item의 description(item.description)을 description에 넣어줌
                        oldprice={item.oldprice} //Products의 index번째 item의 oldprice(item.oldprice)를 oldprice에 넣어줌
                        price={item.price} //Products의 index번째 item의 price(item.price)를 price에 넣어줌
                    />
                )
            })}
        </div>
    );
}

export default TimeSale; //TimeSale컴포넌트 (element객체) 내보냄