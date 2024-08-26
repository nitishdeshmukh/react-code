import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import S from './Student';
import T from './Teacher';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="Student" element={<S/>} />
    <Route path="Teacher" element={<T/>} />
  </Routes>
</BrowserRouter> 
);
