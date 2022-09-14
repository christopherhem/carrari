import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CustomerForm() {
    const navigate = useNavigate()
    const [state, setState] = useState({
        name:'',
        address:'',
        phone_number:'',

    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = state;
        // console.log("HEYYYYYY CUSTOMER DATA IS HERRE!")
        // console.log(data)
        
        const url = 'http://localhost:8090/api/customer/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            navigate('/customer')
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
            <h1>Create a New Customer</h1>
            <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
                <input onChange={handleChange} value={state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value={state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} value={state.phone_number} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                <label htmlFor="phone_number">Phone Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
</>
    )
}
export default CustomerForm;