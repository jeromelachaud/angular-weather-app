function weatherApiFactory() {

  const weatherApi = {
    weatherApiKey: '0574fdb7238ef696712ccd89746bb0e0',
    weatherBaseUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
    city: 'London,uk',
    unit:  'metric'
  };

  return weatherApi;
}

export { weatherApiFactory };
