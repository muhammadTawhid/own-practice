import React from 'react';

const AppointmentsByDate = ({appointments, date}) => {
    return (
        <div>
            <h4>{appointments.length} appointments on {date.toDateString()} </h4>
            {
                appointments.map(appointment => <li>{appointment.service} by {appointment.name}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;