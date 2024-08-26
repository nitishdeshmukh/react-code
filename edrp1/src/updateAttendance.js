import React, { useState } from "react";
import "./updateAttendance.css";
export default function UpdateAttendance() {
    const [rno, setRno] = useState("");
    const [attendance, setAttendance] = useState("");
    const [message, setMessage] = useState("");

    function handleChange1(e) {
        setRno(e.target.value);
    }

    function handleChange2(e) {
        setAttendance(e.target.value);
    }

    function save() {
        const formInfo = {
            rno: rno,
            attendance: attendance,
        };

        fetch("http://localhost:3335/updateAttendance", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMessage(data.info);
            });
    }

    return (
        <div className="container">
            <h2>Update Attendance</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="rno">Roll Number:</label>
                    <input
                        type="text"
                        name="rno"
                        value={rno}
                        onChange={handleChange1}
                        className="form-control"
                        placeholder="Enter Roll Number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="attendance">Attendance:</label>
                    <input
                        type="text"
                        name="attendance"
                        value={attendance}
                        onChange={handleChange2}
                        className="form-control"
                        placeholder="Enter Attendance"
                    />
                </div>
                <button type="button" onClick={save} className="btn btn-primary">
                    Save
                </button>
            </form>
            {message && <p id="x">{message}</p>}
        </div>
    );
}
