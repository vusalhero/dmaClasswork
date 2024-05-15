fetch('https://restcountries.com/v3.1/name/azerbaijan')
.then(response => response.json())
.then(data => {
  const countryData = data[0];

  const countryInfoDiv = document.getElementById('country-info');

  const html = `
    <h2>${countryData.name.common}</h2>
    <p>Status: ${countryData.independent ? 'Independent' : 'Dependent'}</p>
    <p>Territory: ${countryData.area} km²</p>
    <p>Country: ${countryData.region}</p>
    <p>Location: ${countryData.continents[0]}</p>
    <p>Capital: ${countryData.capital}</p>
    <img  src="https://mainfacts.com/media/images/coats_of_arms/az.svg" alt="gerb">
  `;

  countryInfoDiv.innerHTML = html;
})
.catch(error => {
  console.error('Error fetching country data:', error);
  const countryInfoDiv = document.getElementById('country-info');
  countryInfoDiv.textContent = 'Error fetching country data.';
});