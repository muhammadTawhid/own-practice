import React from 'react';

const ServiceCard = ({data}) => {
    return (
        <div className="col-md-4">
            <img style={{height:"100px"}} src={data.img} alt="" />
            <h5 className="my-3">{data.name}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatem quia magnam exercitationem! Excepturi, voluptates.</p>
        </div>
    );
};

export default ServiceCard;