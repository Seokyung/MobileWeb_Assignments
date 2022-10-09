import React from "react"; //React 임포트
import "./moviestory.css"; //moviestory.jsx에서 쓰일 css 스타일 코드 임포트
import Movie from "./movie"; //Movie 컴포넌트 임포트
import { Infos } from "./infos"; //영화 정보들을 담고있는 Infos 임포트

//반복되는 Movie 컴포넌트들을 하나씩 배치하는 MovieStory 컴포넌트
function MovieStory(props) {
    return(
        <div className="wrapper"> {/* div태그 (MovieStory 컴포넌트 전체를 감쌈) */}
            <header className="movieHeader"> {/* header태그 (고정 헤더) */}
                <h2 className="headerTitle">무비스토리</h2> {/* h2태그 (페이지 제목) */}
            </header>
            <div className="movieBody"> {/* div태그 (Movie 컴포넌트가 들어갈 자리) */}
                {/* map함수를 이용해 반복되는 컴포넌트 렌더링 */}
                {/* Infos에서 영화 정보를 받아와 map함수를 이용해 index를 key로 item을 불러오고 item의 각 요소들을 배치함 */}
                {Infos.map((item, index) => {
                    return(
                        <Movie
                            key={index} //index를 key로 사용해 어떤 원소가 변경되었는지 빠르게 감지하고 이에 맞는 item을 불러옴
                            img={item.img} //Infos의 index번째 item의 img(item.img)를 img에 넣어줌
                            color={item.color} //Infos의 index번째 item의 color(item.color)를 color에 넣어줌
                            title={item.title} //Infos의 index번째 item의 title(item.title)을 title에 넣어줌
                            year={item.year} //Infos의 index번째 item의 year(item.year)를 year에 넣어줌
                            genre={item.genre} //Infos의 index번째 item의 genre(item.genre)를 genre에 넣어줌
                            synopsis={item.synopsis} //Infos의 index번째 item의 synopsis(item.synopsis)를 synopsis에 넣어줌
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default MovieStory; //MovieStory 컴포넌트 (element객체) 내보냄