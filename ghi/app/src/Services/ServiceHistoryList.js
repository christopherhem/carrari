import React, { useState, useEffect } from 'react'


function ServiceAppointmentList() {

    const [appointments,setAppointments] = useState([])
    
    const fetchAppointments = async () => {
        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const response = await fetch(appointmentUrl)
        const {appointments} = await response.json();
        console.log(appointments)
        setAppointments(appointments)
    }
    useEffect(() => {
        fetchAppointments()
    }, []);
    

    return (
        <>
            <h1>Service Appointments</h1>
            <input onChange="Search VIN" type="search" className="form-control rounded" placeholder="Search"/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Customer name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Reason</th>
                        <th>Technician</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td> {appointment.vin} </td>
                                <td> {appointment.customer_name} </td>
                                <td> {new Date(appointment.date).toLocaleDateString()} </td>
                                <td> {new Date(appointment.date).toLocaleTimeString('en-US')} </td>
                                <td> {appointment.reason} </td>
                                <td> {appointment.technician.technician_name} </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </>
        );
    }

export default ServiceAppointmentList;






