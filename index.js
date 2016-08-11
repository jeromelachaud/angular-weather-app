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


// const flickrApiKey = '33ab400f91e868ecf11d36f127f29ea0';
const flickrUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=33ab400f91e868ecf11d36f127f29ea0&text=city+of+london&group_id=1074553%40N22&per_page=5&page=1&format=json&nojsoncallback=1';

fetchUrl(flickrUrl)
.then((response) => {
  response = JSON.parse(response);
  console.log(response);
});
