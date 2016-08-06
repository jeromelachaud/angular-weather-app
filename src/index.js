// entry point
const apiKey = '0574fdb7238ef696712ccd89746bb0e0';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const city = 'London,uk';
const unit =  'metric';
const url = `${baseUrl}${city}&appid=${apiKey}&units=${unit}`;

// Fetch data with XMLHttpRequest and Promises
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error(request.StatusText));
      }
    };
    request.onerror = () => reject(Error('Network Error'));
    request.send();
  });
}

// Filter results with vanilla
fetchUrl(url)
.then((response) => {
  response = JSON.parse(response);
  const city = response.name;
  const humidity = response.main.humidity;
  const temp = response.main.temp;
  let sunrise = response.sys.sunrise;
  let sunset = response.sys.sunset;
  const description = response.weather[0].description;
  const main = response.weather[0].main;

  const date = new Date();
  let hours = '0' + date.getHours();
  let minutes = '0' + date.getMinutes();
  const formattedTime = hours.substr(-2) + ':' + minutes.substr(-2);

  sunrise = new Date(sunrise * 1000);
  const sunrise_hours = '0' + sunrise.getHours();
  const sunrise_minutes = '0' + sunrise.getMinutes();
  const formattedSunrise = sunrise_hours.substr(-2) + ':' + sunrise_minutes.substr(-2);

  sunset = new Date(sunset * 1000);
  const sunset_hours = '0' + sunset.getHours();
  const sunset_minutes = '0' + sunset.getMinutes();
  const formattedSunset = sunset_hours.substr(-2) + ':' + sunset_minutes.substr(-2);
  
  console.log(response);

  const app = document.getElementById('main');
  app.innerHTML =
  `${city}
  ${humidity}
  ${temp}
  ${formattedSunrise}
  ${formattedSunset}
  ${description}
  ${main}
  ${formattedTime}`;
});
