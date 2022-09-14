import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SalesPersonForm() {
    const navigate = useNavigate()
    const [state, setState] = useState({
        name:'',
        employee_number:'',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = state;
        
        console.log("HEYYYYYY DATA IS HERRE!")
        console.log(data)
        
        const url = 'http://localhost:8090/api/salesperson/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            navigate('/salesperson')
        }
    }

    const handleChange = event => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        })
    }

    return (
        <>
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a new salesperson</h1>
            <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value={state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value={state.employee_number} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                <label htmlFor="employee_number">Employee Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
</>
    )
}
export default SalesPersonForm;