import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [countryDetail, setCountryDetail] = useState([]);
    const {name, capital, flag, population, region} = countryDetail;

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountryDetail(data[0]))
    }, [])

    useEffect(() => {
        
    }, [])

    // const language = countryDetail.languages[0].name;
    // console.log(language);   
    // there is a bug; maybe that would be fixed by "useState" by set the languages on a state then call by state's hook

    return (
        <div className="App">
            <img style={{width:"200px"}} src={flag} alt="" />
            <h3>Name: {name}</h3>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            {/* <p>Languages: {language}</p> */}
        </div>
    );
};

export default CountryDetails;