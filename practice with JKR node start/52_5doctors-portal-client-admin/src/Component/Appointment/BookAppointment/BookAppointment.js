import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const appointmentData = [
    {
        _id: '98734ruiroiu3489689hsdf',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '98734ruiroiu3489689hsdf',
        id: 2,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '98734ruiroiu3489689hsdf',
        id: 3,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '98734ruiroiu3489689hsdf',
        id: 4,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '98734ruiroiu3489689hsdf',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '98734ruiroiu3489689hsdf',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className='text-center color-text mb-5'>Available appointments on {date.toDateString()}</h2>
            <div className="container">
            <div className="row">
                {
                    appointmentData.map(data => <BookingCard data={data} date={date} key={data.id}/>)
                }
            </div>
            </div>
        </section>
    );
};

export default BookAppointment;