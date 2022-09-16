import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


function SalesForm() {
    const navigate = useNavigate()
    const [automobiles, setAutomobiles] = useState([])
    const [salesPersons, setSalesPersons] = useState([])
    const [Customers, setCustomers] = useState([])
    const [salesPrice, setSalesPrice] = useState('')

    const [selectedAutomobile, setSelectedAutomobile] = useState('')
    const [selectedSalesPerson, setSelectedSalesPerson] = useState('')
    const [selectedCustomer, setSelectedCustomer] = useState('')


    useEffect(() => {
        const getAutomobiles = async () => {
            const url = 'http://localhost:8090/api/automobiles/forsale/'
            const response = await fetch(url)
            const autoJson = await response.json();
            setAutomobiles(autoJson.automobiles)
        }
    
        const getSalesPersons = async () => {
            const url = 'http://localhost:8090/api/salesperson/'
            const response = await fetch(url)
            const personJson = await response.json();
            setSalesPersons(personJson.sales_persons)
        }
        const getCustomers = async () => {
            const url = 'http://localhost:8090/api/customer/'
            const response = await fetch(url)
            const customersJson = await response.json();
            setCustomers(customersJson.customers)
        }
        getAutomobiles()
        getSalesPersons()
        getCustomers()
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            automobile: selectedAutomobile, 
            sales_person: selectedSalesPerson,
            customer: selectedCustomer,
            sales_price: salesPrice,
        };
        console.log(selectedSalesPerson)

        const saleUrl = 'http://localhost:8090/api/sales/'
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(saleUrl, fetchConfig);
        if (response.ok) {
            setAutomobiles([]);
            setSalesPersons([]);
            setCustomers([]);
            setSalesPrice('');
        }
        navigate('/sales')
    }
    const handleAutomobileChange = (event) => {
        console.log(event.target.value)
        setSelectedAutomobile(event.target.value)
    }

    const handleSalesPersonChange = (event) => {
        console.log(event.target.value)
        setSelectedSalesPerson(event.target.value)
    }
    const handleCustomerChange = (event) => {
        console.log(event.target.value)
        setSelectedCustomer(event.target.value)
    }
    
    const handleSalesPriceChange = (event) => {
        setSalesPrice(event.target.value)
    }

    
return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a New Sale</h1>
            <form onSubmit={handleSubmit} id="create-sale-form">
            <div className="mb-3">
                    <select onChange={handleAutomobileChange} value={selectedAutomobile} required name="automobile" id="automobile" className="form-select">
                    <option value="">Choose automobile VIN</option>
                    {automobiles.map(auto => {
                        return (
                        <option key={auto.vin} value={auto.vin}>{auto.vin}</option>
                        )
                    })}
                    </select>
                </div>
            <div className="mb-3">
                <select onChange={handleSalesPersonChange} value={selectedSalesPerson} required name="sales_person" id="sales_person" className="form-select">
                <option value="">Choose a sales person</option>
                {salesPersons.map(person => {
                    return (
                    <option key={person.id} value={person.employee_number}>{person.name}</option>
                    )
                })}
                </select>
            </div>
            <div className="mb-3">
                    <select onChange={handleCustomerChange} value={selectedCustomer} required name="customer" id="customer" className="form-select">
                    <option value="">Choose a customer</option>
                    {Customers.map(customer => {
                        return (
                        <option key={customer.id} value={customer.name}>{customer.name}</option>
                        )
                    })}
                    </select>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleSalesPriceChange} value={salesPrice} placeholder="Sales Price" required type="text" name="sales_price" id="sales_price" className="form-control" />
                <label htmlFor="sales_price">Sales price</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
    );
                
}


export default SalesForm;
