import React, {useState} from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date =>{
        setSelectedDate(date)
    }
    return (
        <div>
            <HeaderNavbar/>
            <AppointmentHeader handleDateChange={handleDateChange}/>
            <BookAppointment date={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;