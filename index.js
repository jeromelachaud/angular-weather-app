// entry point
import fetchUrl from './src/js/fetch-url';
const moment = require('moment');
const apiKey = '0574fdb7238ef696712ccd89746bb0e0';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const city = 'London,uk';
const unit =  'metric';
const url = `${baseUrl}${city}&appid=${apiKey}&units=${unit}`;

fetchUrl(url)
.then((response) => {
  response = JSON.parse(response);
  console.log(response);
  const city = response.name;
  const humidity = response.main.humidity;
  const temp = response.main.temp;
  const description = response.weather[0].description;
  const main = response.weather[0].main;
  const sunrise = response.sys.sunrise * 1000;
  const sunset = response.sys.sunset * 1000;

  const formattedSunrise = moment.parseZone(sunrise).local().format('HH:mm');
  const formattedSunset = moment.parseZone(sunset).local().format('HH:mm');

  const app = document.getElementById('app');
  app.innerHTML =
  `City: ${city}
  Humidity: ${humidity}
  Temperature: ${temp}
  Sunrise: ${formattedSunrise}
  Sunset: ${formattedSunset}
  Description: ${description}
  Main: ${main}`;
});
