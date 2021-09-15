import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country
    const flagStyle = {height:"100px"}
    const handleAddCountries = props.handleAddCountries;
    return (
        <div>
            <h3>This is {name}</h3>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountries(props.country)}>Add countries</button>
        </div>
    );
};

export default Country;