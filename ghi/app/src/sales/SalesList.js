import { useEffect , useState} from "react";


function SalesList() {
  const [currentSaleRecord, setCurrentSaleRecord] = useState([]);

  useEffect(() => {
    const getSalesRecordData = async () => {
        console.log("HELLO")
      const response = await fetch('http://localhost:8090/api/sales/')
      const salesRecordData = await response.json();
      setCurrentSaleRecord(salesRecordData.sales)
      console.log("=HERES YOUR DATAAAAAA=", salesRecordData.sales)
    }
    getSalesRecordData()
  }, []);


  return (
    <>
    <hr></hr>
    <h2>Lists of all sales</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Sales person</th>
          <th>Employee Number</th>
          <th>Purchaser Name</th>
          <th>VIN</th>
          <th>Sales price</th>

        </tr>
      </thead>
      <tbody>
        {currentSaleRecord.map(sale => {
          return (
            <tr key={sale.id}>
              <td>{ sale.sales_person.name }</td>
              <td>{ sale.sales_person.employee_number }</td>
              <td>{ sale.customer.name }</td>
              <td>{ sale.automobile.vin }</td>
              <td>${ parseInt(sale.sales_price).toLocaleString() }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

export default SalesList;
