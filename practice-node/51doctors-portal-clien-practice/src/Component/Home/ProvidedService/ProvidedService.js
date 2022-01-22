import React from 'react';
import treatment from '../../../images/treatment.png'

const ProvidedService = () => {
    return (
        <div className="d-flex justify-content-center  my-5 pt-5">
            <div className="row container d-flex align-items-center">
                <div className="col-md-5">
                    <img src={treatment} style={{ height: "500px" }} alt="" className="mb-5 pb-5" />
                </div>
                <div className="col-md-6">
                    <h1><strong>Exceptional Dental <br /> Care, on Your Terms</strong></h1>
                    <p className="text-secondary my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nulla nesciunt commodi hic atque, placeat odit dolor quis nostrum dolorem voluptas ipsam, at, laudantium ex aperiam eaque. Quos eum, aliquid iste sint iure consectetur beatae harum dolorum numquam, rem libero deleniti commodi, praesentium doloribus nisi id tempora eligendi veritatis modi quo ducimus? Necessitatibus pariatur eius quis consectetur repellat esse praesentium Necessitatibus pariatur eius quis consectetur repellat esse praesentium.</p>
                    <button style={{ background: "linear-gradient(to right, #19D3B1, #11D0DF)", border: "none", padding: "10px 20px", color: "white", fontWeight: "600" }} >Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ProvidedService;