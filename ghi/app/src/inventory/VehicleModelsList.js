import { useEffect , useState} from "react";


function VehicleModelsList({ models }) {
  const [currentVehicleModels, setCurrentVehicleModels] = useState([]);

  useEffect(() => {
    const getVehicleModelsData = async () => {
      const response = await fetch('http://localhost:8100/api/models/')
      const vehicleData = await response.json();
      setCurrentVehicleModels(vehicleData.models)
      console.log("=HERES YOUR DATAAAAAA=", vehicleData.models)
    }
    getVehicleModelsData()
  }, []);




  return (
    <>
    <hr></hr>
    <h1>Vehicle Models</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        {currentVehicleModels.map(model => {
          return (
            <tr key={model.id}>
              <td>{ model.name }</td>
              <td>{ model.manufacturer.name }</td>
              <td><img style={{ width:350, height:250 }} src={ model.picture_url } /></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

export default VehicleModelsList;
