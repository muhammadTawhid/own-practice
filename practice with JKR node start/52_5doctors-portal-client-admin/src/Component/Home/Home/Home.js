import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Header from '../Header/Header';
import ProvidedService from '../ProvidedService/ProvidedService';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <ProvidedService />
            <MakeAppointment />
            <Testimonial />
            <Doctors/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;