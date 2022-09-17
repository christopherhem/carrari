import React, { useEffect, useState } from "react";

function SalesPersonSalesHistory() {
  const [salesPersons, setSalesPersons] = useState([]);
  const [selectedEmployeeID, setSelectedEmployeeID] = useState('');

  const [sales, setSales] = useState([]);
  const [historySales, setHistorySales] = useState([]);

  useEffect(() => {

    const getSalesPersons = async () => {
      const salesPersonsResponse = await fetch("http://localhost:8090/api/salesperson/");
      const salesPersonsData = await salesPersonsResponse.json();
      setSalesPersons(salesPersonsData.sales_persons);
    };
  
    const getSales = async () => {
      const salesResponse = await fetch("http://localhost:8090/api/sales/");
      const salesData = await salesResponse.json();
      setSales(salesData.sales);
    };

    getSalesPersons();
    getSales();

  }, []);


  useEffect(() => {
    const getHistorySalesData = () => {
      const historySalesData = sales.filter((sale) => sale.sales_person.employee_number === (selectedEmployeeID)
      );
      setHistorySales(historySalesData);
    };
    getHistorySalesData();
  }, [sales, selectedEmployeeID]);


  const handleChange = (event) => {
    setSelectedEmployeeID(event.target.value);
  };

  return (
    <>
      <hr></hr>
      <h1>Salesperson's History</h1>
      <div className="mb-3">
      <select onChange={handleChange} value={selectedEmployeeID} className="form-select" name="sales_person_history" id="sales_person_history">
        <option value="">Select a Salesperson</option>
        {salesPersons.map((employee) => {
          return (
            <option key={employee.employee_number} value={employee.employee_number}>{employee.name}</option>
            );
        })}
        </select>
        </div>
        <table className="table table-striped">
        <thead> 
          <tr>
            <th>Sales person</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {historySales.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{sale.sales_person.name}</td>
                <td>{sale.customer.name}</td>
                <td>{sale.automobile.vin}</td>
                <td>${ parseInt(sale.sales_price).toLocaleString() }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SalesPersonSalesHistory;
