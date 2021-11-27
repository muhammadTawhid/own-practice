import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const contextValue = useContext(CategoryContext)
    return (
        <div>
            <h1>this is Shipment {contextValue}</h1>
        </div>
    );
};

export default Shipment;