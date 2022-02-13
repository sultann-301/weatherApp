/* eslint-disable no-unused-expressions */
const UpdatePage = (weatherResults) => {
  const cardContainer = document.querySelector('.card-container');
  while (cardContainer.hasChildNodes()) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  const weatherCard = document.createElement('div');
  weatherCard.className = 'weather-card';
  const location = document.createElement('h2');
  location.className = 'location-title';
  if (weatherResults === null) {
    console.log('NO WEATHER DATA RECEIVED!!');
    location.innerText = 'No Location Found!';
    weatherCard.append(location);
    cardContainer.append(weatherCard);
  } else {
    location.innerText = weatherResults.countryToSearch;
    location.className = 'location';
    const mainTemp = document.createElement('h3');
    mainTemp.className = 'temp';
    const fahrenheitChecked = document.querySelector('#tempSys');
    fahrenheitChecked.checked ? mainTemp.innerHTML = `Current Temperature: ${weatherResults.temp}&#176;F` : mainTemp.innerHTML = `Current Temperature: ${weatherResults.temp}&#176;C`;
    const feelsLike = document.createElement('h3');
    feelsLike.innerHTML = `Feels Like: ${weatherResults.feels_like}&#176;`;
    const humidity = document.createElement('h3');
    humidity.innerText = `Humidity: ${weatherResults.humidity}%`;
    weatherCard.append(location, mainTemp, feelsLike, humidity);
    cardContainer.append(weatherCard);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { UpdatePage };
