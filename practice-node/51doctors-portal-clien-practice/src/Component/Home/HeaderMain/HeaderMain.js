import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <div>
            <div className="row d-flex align-items-center" style={{height:'600px'}}>
                <div className="col-md-4 offset-md-1">
                    <h1>Your New Smile <br/> Starts here</h1>
                    <p  className='muted '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ratione explicabo harum optio impedit illum!</p>
                    <button style={{background: "linear-gradient(to right, #19D3B1, #11D0DF)", border:"none", padding:"10px 10px", color:"white", fontWeight:"600" }} className="">Get Appointment</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;