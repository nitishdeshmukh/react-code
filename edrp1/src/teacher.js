import React, { useState } from "react";
import "./teacher.css";
export default function Teacher() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [mobno, setMobno] = useState("");
    const [message, setMessage] = useState("");

    function handleChange1(e) {
        setId(e.target.value);
    }

    function handleChange2(e) {
        setName(e.target.value);
    }

    function handleChange3(e) {
        setMobno(e.target.value);
    }

    function save() {
        const formInfo = {
            id: id,
            name: name,
            mobno: mobno,
        };

        fetch("http://localhost:3335/teacher", {
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
            <h2>Add New Teacher</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input type="text" name="id" value={id} onChange={handleChange1} className="form-control" placeholder="Enter ID" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={name} onChange={handleChange2} className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="mobno">Mobile Number:</label>
                    <input type="tel" name="mobno" value={mobno} onChange={handleChange3} className="form-control" placeholder="Enter Mobile Number" />
                </div>
                <button type="button" onClick={save} className="btn btn-primary">
                    Save
                </button>
            </form>
            {message && <p id="x">{message}</p>}
        </div>
    );
}
