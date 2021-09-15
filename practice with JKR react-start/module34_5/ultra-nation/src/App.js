import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import CountryCart from './components/CountryCart/CountryCart';

function App() {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, []);

  const [countryCart, setCountryCart] = useState([])
  const handleAddCountries = (country) =>{
    // console.log("added" , country)
    const newCountryCart = [...countryCart, country]
    return setCountryCart(newCountryCart);
  }

  return (
    <div className="App">
      <h1>data loded{countries.length}</h1>
      <p>country added {countryCart.length}</p>
      <CountryCart countryCart={countryCart} />
      <ul>
        {
          countries.map(country => <Country handleAddCountries={handleAddCountries} country = {country} key = {country.alpha3Code}/>) 
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
