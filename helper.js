// Formats response to look presentable on webpage
const renderCountry = function (data, className = '') {
  //data
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const displayCountries = function (event) {
  event.preventDefault();
  while (countriesContainer.firstChild) {
    countriesContainer.removeChild(countriesContainer.firstChild);
  }
  return getCountryAndNeighbour(countryInput.value);
};


// const displayCountry = function (event) {
//   event.preventDefault();
//   while (countriesContainer.firstChild) {
//     countriesContainer.removeChild(countriesContainer.firstChild);
//   }
//   return getCountry(countryInput.value);
// };


