import { useEffect , useState} from "react";


function CustomerList() {
  const [currentCustomer, setCurrentCustomer] = useState([]);

  useEffect(() => {
    const getCustomerData = async () => {
      const response = await fetch('http://localhost:8090/api/customer/')
      const customerData = await response.json();
      setCurrentCustomer(customerData.customers)
      console.log("HERES YOUR DATAAAAAA -_____o", customerData.customers)
    }
    getCustomerData()
  }, []);


  return (
    <>
    <hr></hr>
    <h2>Lists of customers</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {currentCustomer.map(customer => {
          return (
            <tr key={customer.id}>
              <td>{ customer.name }</td>
              <td>{ customer.address }</td>
              <td>{ customer.phone_number }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

export default CustomerList;
