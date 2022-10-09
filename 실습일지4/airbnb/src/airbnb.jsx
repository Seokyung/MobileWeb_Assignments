import React from "react"; //React 임포트
import Area from "./area"; //Area 컴포넌트 임포트
import { Places } from "./places"; //도시 정보들을 담고있는 Places 임포트
import "./airbnb.css"; //airbnb.jsx에서 쓰일 css 스타일 코드 임포트

//반복되는 Area 컴포넌트들을 하나씩 배치하는 Airbnb 컴포넌트
function Airbnb(props) {
    return(
        <div className="wrapper"> {/* div태그 (Airbnb 컴포넌트 전체를 감쌈) */}
            {/* map함수를 이용해 반복되는 컴포넌트 렌더링 */}
            {/* Places에서 도시 정보를 받아와 map함수를 이용해 index를 key로 item을 불러오고 item의 각 요소들을 배치함 */}
            {Places.map((item, index) => {
                return(
                    <Area
                        key={index} //index를 key로 사용해 어떤 원소가 변경되었는지 빠르게 감지하고 이에 맞는 item을 불러옴
                        img={item.img} //Places의 index번째 item의 img(item.img)를 img에 넣어줌
                        color={item.color} //Places의 index번째 item의 color(item.color)를 color에 넣어줌
                        title={item.title} //Places의 index번째 item의 title(item.title)을 title에 넣어줌
                        distance={item.distance} //Places의 index번째 item의 distance(item.distance)를 distance에 넣어줌
                    />
                )
            })}
        </div>
    );
}

export default Airbnb; //Airbnb 컴포넌트 (element객체) 내보냄