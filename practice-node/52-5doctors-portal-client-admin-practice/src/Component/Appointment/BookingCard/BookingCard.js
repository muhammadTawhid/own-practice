import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({data, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title color-text">{data.subject}</h5>
                    <h6>{data.visitingHour}</h6>
                    <p>{data.totalSpace} SPACE AVAILABLE</p>
                    <button onClick={openModal} className="text-uppercase brand-btn">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentSub={data.subject} date={date} closeModal={closeModal}/>
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;