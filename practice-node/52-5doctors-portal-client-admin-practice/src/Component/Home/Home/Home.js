import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Header from '../Header/Header';
import ProvidedService from '../ProvidedService/ProvidedService';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <ProvidedService />
            <MakeAppointment />
            <Testimonial />
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;