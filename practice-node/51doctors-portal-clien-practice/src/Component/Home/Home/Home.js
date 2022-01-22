import React from 'react';
import Appointment from '../Appointment/Appointment';
import Header from '../Header/Header';
import ProvidedService from '../ProvidedService/ProvidedService';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <ProvidedService />
            <Appointment />
            <Testimonial />
        </div>
    );
};

export default Home;