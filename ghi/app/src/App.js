
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';


import ManufacturersList from './inventory/ManufacturersList';
import ManufacturerForm from './inventory/ManufacturerForm';

import VehicleForm from './inventory/VehicleForm';
import VehicleModelsList from './inventory/VehicleModelsList';

import AutomobileList from './inventory/AutomobileList';
import AutomobileForm from './inventory/AutomobileForm';

import SalesPersonForm from './sales/SalesPersonForm';
import SalesPersonList from './sales/SalesPersonList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ManufacturersList />} />
            <Route path="new/" element={<ManufacturerForm />}/>
          </Route>
          <Route path="models">
            <Route index element={<VehicleModelsList />}/>
            <Route path="new/" element={<VehicleForm />}/>
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />}/>
            <Route path="new/" element={<AutomobileForm />}/>
          </Route>
          <Route path="salesperson">
            <Route index element={<SalesPersonList />}/>
            <Route path="new/" element={<SalesPersonForm />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
