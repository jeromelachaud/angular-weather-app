function weatherFactory($scope) {
  const weatherApi = {
    apiKey: '0574fdb7238ef696712ccd89746bb0e0',
    baseUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
    city: 'London,uk',
    unit:  'metric'
  };

  const {
    apiKey,
    baseUrl,
    city,
    unit
  } = weatherApi;

  const weatherUrl = `${baseUrl}${city}&appid=${apiKey}&units=${unit}`;

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
  });


  console.log(weatherUrl);
  console.log($scope);
  $scope.message = 'Two birds killed with one stone!'
}

export { weatherController }
