import React from 'react'; //React와 ReactDOM 임포트
import ReactDOM from 'react-dom/client';
import MovieStory from './moviestory'; //moviestory.jsx 에서 만든 MovieStory 컴포넌트 임포트
import './index.css'; //index.js에서 쓰일 css 스타일 코드 임포트

const root = ReactDOM.createRoot(document.getElementById('root')); //index.html의 div 태그를 id(root)로 가져옴
root.render( //root에 렌더링 될 컴포넌트들 작성
  <React.StrictMode>
    <MovieStory /> {/* 임포트한 MovieStory 컴포넌트 배치 (사용자 정의 태그) */}
  </React.StrictMode>
);