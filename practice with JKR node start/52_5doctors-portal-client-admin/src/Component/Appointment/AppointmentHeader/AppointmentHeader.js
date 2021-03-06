import React from 'react';
import Calendar from 'react-calendar'
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main>
            <div className="row d-flex align-items-center" style={{ height: '600px' }}>
                <div className="col-md-4 offset-md-1">
                    <h1>Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;