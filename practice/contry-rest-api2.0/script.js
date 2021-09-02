fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => showCountries(data));

const showCountries = (data) => {
  const countriesDiv = document.getElementById("countries");
  data.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.className = "countryDiv";
    const countryInfo = `
        <h1>${country.name}</h1>
        <p>${country.capital}</p>
        <button onClick="showCountryDetails('${country.name}')">Details</button>
        `;
    countryDiv.innerHTML = countryInfo;
    countriesDiv.appendChild(countryDiv);
  });
};

const showCountryDetails = (name) => {
  // const url = `https://restcountries.eu/rest/v2/name/${name}`
  // fetch(url);

  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((res) => res.json())
    .then((data) => showDetails(data[0]));
};

const showDetails = (country) => {
  document.getElementById("countryDetails").innerHTML = `
    <img src="${country.flag}" />
    <h1>${country.name}</h1>
    <p>Capital:  ${" " + country.capital}</p>
    <p>Population:  ${" " + country.population}</p>
    <p>Area:  ${" " + country.area}</p>
    `;
};
