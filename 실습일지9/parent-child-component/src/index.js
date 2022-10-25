import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PassingCount from './ex1/passingCount'; //실습1
import Specialization from './ex2/specialization'; //실습2

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<PassingCount/> //실습1
  <Specialization/> //실습2
);