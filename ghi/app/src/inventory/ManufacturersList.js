import { useEffect , useState} from "react";


function ManufacturersList({ manufacturers }) {
  const [currentManufacturers, setCurrentManufacturers] = useState([]);

  useEffect(() => {
    const getManufacturerData = async () => {
      const response = await fetch('http://localhost:8100/api/manufacturers/')
      const manufacturerData = await response.json();
      setCurrentManufacturers(manufacturerData.manufacturers)
      console.log(" THIS IS:", manufacturerData)
    }
    getManufacturerData()
  }, []);


  return (
    <>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {currentManufacturers.map(manufacturer => {
          return (
            <tr key={manufacturer.id}>
              <td>{ manufacturer.name }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

export default ManufacturersList;
