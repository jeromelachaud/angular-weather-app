function weatherController($scope) {
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

  console.log(weatherUrl);
  console.log($scope);
  $scope.message = 'Two birds killed with one stone!'
}

export { weatherController }
