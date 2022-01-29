import React from 'react';
import AppointmentShortList from './AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments, date}) => {
    return (
        <div>
            <h4>{appointments.length} appointments on {date.toDateString()} </h4>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;