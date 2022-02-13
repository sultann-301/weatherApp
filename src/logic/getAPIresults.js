const myAPIkey = 'dd5c310df89fe652ea2310609369a6d2';
const axios = require('axios').default;

async function getLatAndLong(countryName) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${countryName}&limit=5&appid=${myAPIkey}`);
    const { lat, lon } = response.data[0];
    console.log(response.data);
    const coordinatesObject = { lat, lon };
    return coordinatesObject;
  } catch (e) {
    console.log('ERROR ERROR ERROR');
    console.log(e);
    return null;
  }
}

async function getWeather() {
  try {
    const countryInput = document.querySelector('#country');
    const tempCheckbox = document.querySelector('#tempSys');
    const countryToSearch = countryInput.value;
    console.log(countryToSearch);
    const fixedCountryToSearch = countryToSearch.replace(/(\s+$|^\s+)/g, '').replace(/(,\s+)/g, ',').replace(/\s+/g, '+');
    console.log(fixedCountryToSearch);
    const coordinates = await getLatAndLong(fixedCountryToSearch);
    let chosenTempSystem = '';
    // eslint-disable-next-line no-unused-expressions
    tempCheckbox.checked ? chosenTempSystem = 'imperial' : chosenTempSystem = 'metric';
    const weatherSearch = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=${chosenTempSystem}&appid=${myAPIkey}`);
    const weatherData = weatherSearch.data.main;

    console.log(weatherSearch.data);

    const weatherObject = await { countryToSearch, ...weatherData };

    countryInput.value = '';
    return weatherObject;
  } catch (e) {
    console.log('ERROR ERROR ERROR');
    console.log(e);
    return null;
  }
}

// eslint-disable-next-line import/prefer-default-export
export { getWeather };
