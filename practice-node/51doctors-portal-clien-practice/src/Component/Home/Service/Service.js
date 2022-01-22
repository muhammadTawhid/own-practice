import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        name: 'Cavity Feeling',
        img: cavity,
    },
    {
        name: 'Teeth Whiting',
        img: whitening,
    },
]

const Service = () => {
    return (
        <div className="text-center">
            <h5 style={{color:"#1CC7C1"}}><strong>OUR SERVICE</strong></h5>
            <h1>Service We Provide</h1>
            <div className="d-flex justify-content-center">
                <div className="row mt-5 pt-5 w-75">
                    {
                        serviceData.map(data => <ServiceCard data={data}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;