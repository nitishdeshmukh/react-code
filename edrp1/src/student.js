import React, { useState } from "react";
import "./student.css";
export default function Student() {
    const [rno, setRno] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [mobno, setMobno] = useState("");
    const [sem, setSem] = useState("");
    const [marks, setMarks] = useState("");
    const [attendance, setAttendance] = useState("");
    const [message, setMessage] = useState("");

    function handleChange1(e) {
        setRno(e.target.value);
    }

    function handleChange2(e) {
        setId(e.target.value);
    }

    function handleChange3(e) {
        setName(e.target.value);
    }

    function handleChange4(e) {
        setMobno(e.target.value);
    }

    function handleChange5(e) {
        setSem(e.target.value);
    }

    function handleChange6(e) {
        setMarks(e.target.value);
    }

    function handleChange7(e) {
        setAttendance(e.target.value);
    }

    function save() {
        const formInfo = {
            rno: rno,
            id: id,
            name: name,
            mobno: mobno,
            sem: sem,
            marks: marks,
            attendance: attendance,
        };

        fetch("http://localhost:3335/student", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                setMessage(data.info);
            });
    }

    return (
        <div className="container">
            <h2>Add New Student</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="rno">Roll Number:</label>
                    <input type="text" name="rno" value={rno} onChange={handleChange1}className="form-control" placeholder="Enter Roll Number" />
                </div>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input type="text" name="id" value={id} onChange={handleChange2}className="form-control" placeholder="Enter ID"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={name} onChange={handleChange3}className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="mobno">Mobile Number:</label>
                    <input type="tel" name="mobno" value={mobno} onChange={handleChange4}className="form-control" placeholder="Enter Mobile Number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="sem">Semester:</label>
                    <input type="text" name="sem" value={sem} onChange={handleChange5}className="form-control" placeholder="Enter Semester"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="marks">Marks:</label>
                    <input type="text" name="marks" value={marks} onChange={handleChange6}className="form-control" placeholder="Enter Marks" />
                </div>
                <div className="form-group">
                    <label htmlFor="attendance">Attendance:</label>
                    <input type="text" name="attendance" value={attendance} onChange={handleChange7} className="form-control" placeholder="Enter Attendance"/>
                </div>
                <button type="button" onClick={save} className="btn btn-primary">
                    Save
                </button>
            </form>
            {message && <p id="x">{message}</p>}
        </div>
    );
}
