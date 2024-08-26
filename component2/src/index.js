import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Box1 from'./Box1';
import Box2 from './Box2';
import Fotter from './Fotter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main-section'>
    <Header/>
    <div className='section1'>
    <Box1/>
    <Box1/>
    </div>
    <div className='section2'>
    <Box2/>
    <Box2/>
    <Box2/>
    </div>
    <Fotter/>
  </div>
);