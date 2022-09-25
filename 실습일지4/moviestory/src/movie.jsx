import React from "react"; //React 임포트
import "./movie.css" //movie.jsx에서 쓰일 css 스타일 코드 임포트

//하나의 영화 섹션을 보여주는 Movie 컴포넌트
function Movie(props) { //props를 통해 MovieStory 컴포넌트에서 상품 정보를 받아옴
    return(
        <div className="movieContainer"> {/* div태그 (Movie 컴포넌트 전체를 감쌈) */}
            <img src={props.img} className="movieImg" alt="movieImg" /> {/* img태그 (영화 포스터 이미지) */}
            <div className="infoContainer" style={{backgroundColor: props.color}}> {/* div태그 (영화 상세정보를 담는 박스, 배경색은 영화마다 다름) */}
                <p className="titleTxt">{props.title}<span className="yearTxt">{props.year}</span></p> {/* p태그 (영화 제목), span태그 (개봉년도) */}
                <p className="genreTxt">{props.genre}</p> {/* p태그 (영화 장르) */}
                <p className="synopTxt">{props.synopsis}</p> {/* p태그 (영화 개요) */}
            </div>
        </div>
    );
}

export default Movie; //Movie 컴포넌트 (element객체) 내보냄