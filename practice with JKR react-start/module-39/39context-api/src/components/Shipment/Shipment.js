import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCount] = useContext(CategoryContext);
    console.log(category, setCount);
    return (
        <div>
            <h1>this is shipment {category}</h1>
            <button onClick={() => setCount(category + 1)}>increase implement by context api</button>
        </div>
    );
};

export default Shipment;