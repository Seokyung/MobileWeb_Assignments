import React from 'react'; //React와 ReactDOM 임포트
import ReactDOM from 'react-dom/client';
import './index.css'; //index.js에서 쓰일 css 스타일 코드 임포트
import TimeSale from './timesale' //timesale.jsx 에서 만든 TimeSale 컴포넌트 임포트

const root = ReactDOM.createRoot(document.getElementById('root')); //index.html의 div 태그를 id(root)로 가져옴
root.render( //root에 렌더링 될 컴포넌트들 작성
  <React.StrictMode>
    <TimeSale /> {/* 임포트한 TimeSale 컴포넌트 배치 (사용자 정의 태그) */}
  </React.StrictMode>
);
/* 1초마다 페이지 새로고침 */
// setInterval(() => {
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(
//       <React.StrictMode>
//         <TimeSale />
//       </React.StrictMode>
//     );
//   }, 1000);