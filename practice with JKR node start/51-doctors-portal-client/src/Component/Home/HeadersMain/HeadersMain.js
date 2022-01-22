import React from 'react';
import chair from "../../../images/chair.png"

const HeadersMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your new smile <br/> Starts here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente voluptatem, culpa non laborum aspernatur blanditiis.</p>
                <button className="btn btn-primary">Get Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeadersMain;