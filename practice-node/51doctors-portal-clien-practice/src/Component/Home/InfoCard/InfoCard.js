import './InfoCard.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({data}) => {
    return (
            <div className={`col-md-4 d-flex justify-content-around info-card card-${data.background}`}>
                <div>
                    <FontAwesomeIcon className="card-icon" icon={data.icon} />
                </div>
                <div>
                    <h5>{data.title}</h5>
                    <small>{data.description}</small>
                </div>
            </div>
    );
};

export default InfoCard;