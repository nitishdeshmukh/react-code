import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Teacher from "./teacher";
import Student from "./student";
import UpdateAttendance from "./updateAttendance";
import UpdateMarks from "./updateMarks";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="container">
      <div className="nav-buttons">
        <button className="nav-button"><Link to="/teacher">Teacher</Link></button>
        <button className="nav-button"><Link to="/student">Student</Link></button>
        <button className="nav-button"><Link to="/updateMarks">Marks Section</Link></button>
        <button className="nav-button"><Link to="/updateAttendance">Attendance Section</Link></button>
      </div>
      <Routes>
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/updateMarks" element={<UpdateMarks />} />
        <Route path="/updateAttendance" element={<UpdateAttendance />} />
      </Routes>
    </div>
  </BrowserRouter>
);
