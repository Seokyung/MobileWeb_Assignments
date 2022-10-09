import React from "react"; //React 임포트
import "./area.css"; //area.jsx에서 쓰일 css 스타일 코드 임포트

//하나의 도시 섹션을 보여주는 Area 컴포넌트
function Area(props) { //props를 통해 Airbnb 컴포넌트에서 상품 정보를 받아옴
    return(
        <div className="areaContainer" style={{backgroundColor: props.color}}> {/* div태그 (Area 컴포넌트 전체를 감쌈) */}
            <img src={props.img} className="areaImg" alt="areaImg" /> {/* img태그 (도시 이미지) */}
            <div className="infoContainer"> {/* div태그 (도시 정보를 담는 박스) */}
                <p className="titleTxt">{props.title}</p> {/* p태그 (도시 이름) */}
                <p className="disTxt">{props.distance}km 거리</p> {/* p태그 (도시와의 거리) */}
            </div>
        </div>
    );
}

export default Area; //Area 컴포넌트 (element객체) 내보냄