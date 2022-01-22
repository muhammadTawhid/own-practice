import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhone   } from '@fortawesome/free-solid-svg-icons'

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
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infosData.map(data => <InfoCard data={data}/>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;