import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

import ServiceAppointmentForm from './Services/ServiceAppointmentForm';
import ServiceAppointmentList from './Services/ServiceAppointmentList';
import ServiceAppointmentHistory from './Services/ServiceHistoryList';
import TechnicianForm from './Services/TechnicianForm';

import ManufacturersList from './inventory/ManufacturersList';
import ManufacturerForm from './inventory/ManufacturerForm';
import VehicleForm from './inventory/VehicleForm';
import VehicleModelsList from './inventory/VehicleModelsList';
import AutomobileList from './inventory/AutomobileList';
import AutomobileForm from './inventory/AutomobileForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments" >
            <Route path="new" element={<ServiceAppointmentForm/>} />
            <Route index element={<ServiceAppointmentList/>}/>
            <Route path="history" element={<ServiceAppointmentHistory/>}/>
          </Route>
          <Route path ="technicians" >
            <Route path="new" element={<TechnicianForm/>} />
          </Route>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

