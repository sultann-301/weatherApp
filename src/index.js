import { getWeather } from './logic/getAPIresults';
import { UpdatePage } from './logic/UpdatePage';

console.log('WEBPACK ACTIVE');
const submitButton = document.querySelector('form button');
submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const result = await getWeather();
  console.log(result);
  UpdatePage(result);
});
