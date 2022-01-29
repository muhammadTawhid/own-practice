import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    console.log(doctors);

    useEffect(() =>{
        fetch("http://localhost:5000/doctors")
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h5 className='color-text text-center'><b>OUR DOCTOR</b></h5>
            {
                doctors.map(doctor => 
                    <div key={doctor.img}>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    {/* {
                                        doctor.image ? <img style={{height:"200px"}} src={`data:image/png;base64,${doctor.image.img}`} alt="" /> :
                                        <img style={{height:"200px"}} src={`http://localhost:5000/${doctor.img}`} alt="" />
                                    } */}
                                    { doctor.image?.img && <img style={{height:"200px"}} src={`data:image/png;base64,${doctor.image.img}`} alt="" />}
                                    <h4>{doctor.name}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Doctors;