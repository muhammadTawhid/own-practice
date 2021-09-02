function loadData() {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const countries = data[i];
        const countryDiv = document.getElementById("countriesContainer");
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.innerText = countries.name;
        const h4 = document.createElement("h4");
        h4.innerText = countries.capital;
        div.appendChild(h2);
        div.appendChild(h4);
        countryDiv.appendChild(div);
      }
    });
}
loadData();

document
  .getElementById("countriesContainer")
  .addEventListener("click", function () {
    const countriesContainer = document.getElementById("countriesContainer");
    countriesContainer.style.display = "none";
    const countryName = event.target.innerText;
    showCountryDetail(countryName);
  });

function showCountryDetail(countryName) {
  fetch("https://restcountries.eu/rest/v2/name/" + countryName)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const country = data[i];
        document.getElementById("showImg").src = country.flag;
        document.getElementById("showName").innerText = "Name: " + country.name;
        document.getElementById("showCapital").innerText =
          "Capital: " + country.capital;
        document.getElementById("showPopulation").innerText =
          "Population: " + country.population + " people";
        document.getElementById("showCurrency").innerText =
          "Currency: " + country.currencies[0].code;
        document.getElementById("showContinent").innerText =
          "Continent: " + country.region;
        document.getElementById("showTimeZone").innerText =
          "Timezone: " + country.timezones[0];
      }
    });
}
