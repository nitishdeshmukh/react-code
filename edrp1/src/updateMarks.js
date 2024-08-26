import React, { useState } from "react";
import "./updateMarks.css";
export default function UpdateMarks() {
    const [rno, setRno] = useState("");
    const [marks, setMarks] = useState("");
    const [message, setMessage] = useState("");

    function handleChange1(e) {
        setRno(e.target.value);
    }

    function handleChange2(e) {
        setMarks(e.target.value);
    }

    function save() {
        const formInfo = {
            rno: rno,
            marks: marks,
        };

        fetch("http://localhost:3335/updateMarks", {
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
            <h2>Update Marks</h2>
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
                    <label htmlFor="marks">Marks:</label>
                    <input
                        type="text"
                        name="marks"
                        value={marks}
                        onChange={handleChange2}
                        className="form-control"
                        placeholder="Enter Marks"
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
