import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, capital} = props.country;
    const countryStyle = {
        border: "3px solid goldenrod",
        margin: "20px",
        padding: "20px"
    }
    return (
        <div style={countryStyle} >
            <h3>{name}</h3>
            <p>{capital}</p>
            <button><Link to={`/country/${name}`}>click to see country details -&gt;</Link></button>
        </div>
    );
};

export default Country;