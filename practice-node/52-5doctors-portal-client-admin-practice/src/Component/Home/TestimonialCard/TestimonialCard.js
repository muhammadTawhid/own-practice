import React from 'react';

const TestimonialCard = ({ data }) => {
    return (
        <div className="col-md-4 shadow p-5 my-5 " style={{ width: "300px" }}>
            <p>{data.description}</p>
            <div className="d-flex justify-content-around mt-3">
                <img style={{ width: "50px" }} src={data.img} alt="" />
                <div>
                    <h5 style={{ color: "#1CC7C1", fontWeight: "600" }}>{data.name}</h5>
                    <small className="text-secondary">{data.address}</small>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;