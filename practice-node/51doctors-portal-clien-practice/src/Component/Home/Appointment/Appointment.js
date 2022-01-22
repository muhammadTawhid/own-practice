import './Appointment.css'
import React from 'react';
import doctor from '../../../images/doctor.png'

const Appointment = () => {
    return (
        <div className="d-flex justify-content-around appointment-container my-5">
            <div className="row container d-flex align-items-center appointment-content">
                <div className="col-md-5">
                    <img style={{ height: "500px", marginTop: "-150px", paddingTop: "50px" }} src={doctor} alt="" />
                </div>
                <div className="col-md-7">
                    <h5 style={{ color: "#1CC7C1" }}>APPOINTMENT</h5>
                    <h2>Make an appointment <br /> Today</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam quibusdam ipsum incidunt! Dolorum quaerat atque molestiae voluptatibus, voluptate est saepe culpa vel provident laborum.</p>
                    <button style={{ background: "linear-gradient(to right, #19D3B1, #11D0DF)", border: "none", padding: "10px 20px", color: "white", fontWeight: "600" }}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;