import React from 'react';
import { faClock, faMapMarkerAlt, faPhone   } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Opening hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit our location',
        description: 'Block 100 NY, United State',
        icon: faMapMarkerAlt,
        background: 'dark',
    },
    {
        title: 'Contact us now',
        description: '+9435733599',
        icon: faPhone,
        background: 'primary',
    },
]


const BusinessInfo = () => {
    return (
        <div className="d-flex justify-content-around">
            <div className="row w-75 d-flex justify-content-around">
                {
                    infosData.map(data => <InfoCard data={data}/>)
                }
            </div>
        </div>
    );
};

export default BusinessInfo;