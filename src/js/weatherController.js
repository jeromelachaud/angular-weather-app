import moment from 'moment';

function weatherController($scope, $http) {
  const weatherApi = {
    apiKey: '0574fdb7238ef696712ccd89746bb0e0',
    baseUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
    city: 'London,uk',
    unit:  'metric'
  };

  let {
    apiKey,
    baseUrl,
    city,
    unit
  } = weatherApi;

  let weatherUrl = `${baseUrl}${city}&appid=${apiKey}&units=${unit}`;

  function getResponse(weatherUrl) {
    $http.get(weatherUrl)
    .success((response) => {
      $scope.city = response.name;
      $scope.humidity = response.main.humidity;
      $scope.temperature = Number((response.main.temp).toFixed(1));
      $scope.wind = response.wind.speed;
      $scope.description = response.weather[0].description;
      $scope.main = response.weather[0].main;
      $scope.icon = response.weather[0].icon;
      $scope.sunrise = moment.parseZone(response.sys.sunrise * 1000).local().format('HH:mm');
      $scope.sunset = moment.parseZone(response.sys.sunset * 1000).local().format('HH:mm');
    });
  }
  getResponse(weatherUrl);

  $scope.changeCity = function () {
    let weatherUrl = `${baseUrl}${$scope.newCity}&appid=${apiKey}&units=${unit}`;
    getResponse(weatherUrl);
  };

  const searchButton = document.getElementById('searchButton');
  const closeButton = document.getElementById('closeButton');
  const searchFormContainer = document.getElementById('searchFormContainer');
  const changeCityForm = document.getElementById('changeCityForm');
  const formInput = document.getElementById('formInput');

  const onSubmitFormDomManipulations = function() {
    searchFormContainer.classList.add('search-form-container--hidden');
    formInput.value = '';
  };

  const onClickSearchDomManipulations = function() {
    searchFormContainer.classList.remove('search-form-container--hidden');
    formInput.focus();
  };

  searchButton.addEventListener('click', () => onClickSearchDomManipulations());
  changeCityForm.addEventListener('submit', () => onSubmitFormDomManipulations());
  closeButton.addEventListener('click', () => searchFormContainer.classList.add('search-form-container--hidden'));
}

export { weatherController };
