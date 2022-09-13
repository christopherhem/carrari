import { useEffect , useState} from "react";


function SalesPersonList({ sales_persons }) {
  const [currentSalesPerson, setCurrentSalesPerson] = useState([]);

  useEffect(() => {
    const getSalesPersonData = async () => {
        console.log("HELLO")
      const response = await fetch('http://localhost:8090/api/salesperson/')
      const salesPersonData = await response.json();
      setCurrentSalesPerson(salesPersonData.sales_persons)
      console.log("=HERES YOUR DATAAAAAA=", salesPersonData.sales_persons)
    }
    getSalesPersonData()
  }, []);


  return (
    <>
    <hr></hr>
    <h2>Lists of Salesperson</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Employee ID</th>
        </tr>
      </thead>
      <tbody>
        {currentSalesPerson.map(salesperson => {
          return (
            <tr key={salesperson.id}>
              <td>{ salesperson.name }</td>
              <td>{ salesperson.employee_number }</td>
              {/* <td><img src={ model.picture_url }/></td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

export default SalesPersonList;
