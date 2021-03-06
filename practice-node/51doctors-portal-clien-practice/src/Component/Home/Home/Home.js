import React from 'react';
import Appointment from '../Appointment/Appointment';
import Header from '../Header/Header';
import ProvidedService from '../ProvidedService/ProvidedService';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <ProvidedService />
            <Appointment />
            <Testimonial />
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;