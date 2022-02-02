import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';

const containerStyle = {
    backgroundColor : "#F4FDFB",
    height: "100%" 

}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date =>{
        setSelectedDate(date)
    }

    useEffect(() =>{
        const justDate = selectedDate.toDateString();
        fetch("http://localhost:5000/appointmentByDate", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({justDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))  
    }, [selectedDate])

    

    return (
        <section>
            <div style={{containerStyle}} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5">
                <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments} date={selectedDate}/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;