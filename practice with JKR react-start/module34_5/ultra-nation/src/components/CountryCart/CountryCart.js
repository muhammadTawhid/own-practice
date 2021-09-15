import React from 'react';

const CountryCart = (props) => {
    const countriesCart = props.countryCart;

    // let totalPopulation = 0;
    // for (let i = 0; i < countriesCart.length; i++) {
    //     const countries = countriesCart[i];
    //     totalPopulation = totalPopulation + countries.population;
    // }

    const totalPopulation = countriesCart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h3>this is added{countriesCart.length}</h3>
            <p>total Population{totalPopulation}</p>
        </div>
    );
};

export default CountryCart;