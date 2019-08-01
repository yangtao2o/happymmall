import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './app.scss';
import ImgSrc from './react.png';

ReactDOM.render(
  <div>
    <h1>Hello, React.</h1>
    <img src={ImgSrc} alt="react"/>
  </div>,
  document.getElementById('root')
);