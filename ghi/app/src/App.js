import { useEffect , useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';


import ManufacturersList from './inventory/ManufacturersList';


function App() {
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
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturersList manufacturers={currentManufacturers}/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
