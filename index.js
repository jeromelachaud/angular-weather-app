import {fetchUrl} from './src/js/helpers';
import {
  flickrApi,
  weatherApi
} from './src/js/constants';
const moment = require('moment');
const svgSpriteInjector = require('./src/js/third-party/svg-sprite-injector.js');
svgSpriteInjector(document.body);

const {
  weatherApiKey,
  weatherApiBaseUrl,
  city,
  unit
} = weatherApi;

const weatherUrl = `${weatherApiBaseUrl}${city}&appid=${weatherApiKey}&units=${unit}`;

const {
  flickrApiKey,
  flickrApiBaseUrl,
  method,
  text,
  group_id,
  photos_per_page,
  number_of_page,
} = flickrApi;

const flickrUrl = `${flickrApiBaseUrl}${method}&api_key=${flickrApiKey}&text=${text}&group_id=${group_id}&per_page=${photos_per_page}&${number_of_page}=1&format=json&nojsoncallback=1`;

fetchUrl(weatherUrl)
.then((response) => {
  response = JSON.parse(response);
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

fetchUrl(flickrUrl)
.then((response) => {
  response = JSON.parse(response);
  console.log(response);
});
