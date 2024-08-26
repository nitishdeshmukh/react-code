import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
// PorpConcept--->
function Header(){
   return <div className='header'></div>
 }
 function Box(prop){
   return <div className='box'>{prop.data}</div>
  }
 function Box1(){
  return <div className='box1'></div>
 }
 function Box2(){
   return <div className='box2'></div>
 }
 root.render(
   <div>
     <Header/>
     <div className='a'>
     <Box data='Nitish'/>
     <Box data='Abhay'/>
     </div>
     <div className='c'>
     <Box1/>
     </div>
     <div className='b'>
       <Box2/>
       <Box2/>
       <Box2/>
     </div>
   </div>
 );