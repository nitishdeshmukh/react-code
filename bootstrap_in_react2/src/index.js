import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Fotter from './Fotter';
import Box from './Box';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <div className='main-section'>
      <div className='text-section'>
        
      
      </div>
      <div className='container-section'>
        <Box data='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, itaque! Nisi officia sint recusandae dolorem explicabo quae enim exercitationem, repellendus fuga ipsa quas odio reiciendis ullam harum quos labore ad facere laudantium, sed quo iusto! Animi nulla necessitatibus a tempore repellendus rem voluptas? Consequatur minima vero labore quisquam nihil. Molestias.'/>
        <Box data='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, itaque! Nisi officia sint recusandae dolorem explicabo quae enim exercitationem, repellendus fuga ipsa quas odio reiciendis ullam harum quos labore ad facere laudantium, sed quo iusto! Animi nulla necessitatibus a tempore repellendus rem voluptas? Consequatur minima vero labore quisquam nihil. Molestias.'/>
        <Box data='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, itaque! Nisi officia sint recusandae dolorem explicabo quae enim exercitationem, repellendus fuga ipsa quas odio reiciendis ullam harum quos labore ad facere laudantium, sed quo iusto! Animi nulla necessitatibus a tempore repellendus rem voluptas? Consequatur minima vero labore quisquam nihil. Molestias.'/>
        <Box data='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, itaque! Nisi officia sint recusandae dolorem explicabo quae enim exercitationem, repellendus fuga ipsa quas odio reiciendis ullam harum quos labore ad facere laudantium, sed quo iusto! Animi nulla necessitatibus a tempore repellendus rem voluptas? Consequatur minima vero labore quisquam nihil. Molestias.'/>
      </div>
    </div>
    <Fotter/>
  </div>
);

