import moment from 'moment';

function weatherController($scope, $http, weatherApi, fivehundredApi) {

  let {
    weatherApiKey,
    weatherBaseUrl,
    city,
    unit
  } = weatherApi;

  let weatherUrl = `${weatherBaseUrl}${city}&appid=${weatherApiKey}&units=${unit}`;

  function getWeatherResponse(weatherUrl) {
    $http.get(weatherUrl)
    .success((weatherResponse) => {
      $scope.city = weatherResponse.name;
      $scope.humidity = weatherResponse.main.humidity;
      $scope.temperature = Number((weatherResponse.main.temp).toFixed(1));
      $scope.wind = weatherResponse.wind.speed;
      $scope.description = weatherResponse.weather[0].description;
      $scope.main = weatherResponse.weather[0].main;
      $scope.icon = weatherResponse.weather[0].icon;
      $scope.sunrise = moment.parseZone(weatherResponse.sys.sunrise * 1000).local().format('HH:mm');
      $scope.sunset = moment.parseZone(weatherResponse.sys.sunset * 1000).local().format('HH:mm');
    });
  }
  getWeatherResponse(weatherUrl);

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
  
  let {
    fivehundredBaseUrl,
    consumerKey,
    term,
    number_of_page,
    photos_per_page,
    image_size
  } = fivehundredApi;

  let fivehundredUrl = `${fivehundredBaseUrl}${term}&consumer_key=${consumerKey}&page=${number_of_page}&rpp=${photos_per_page}&image_size=${image_size}`;

  function getfivehundredResponse(fivehundredUrl) {
    $http.get(fivehundredUrl)
    .success((fivehundredResponse) => {
      $scope.image_url = fivehundredResponse.photos[0].image_url;
    });
  }
  getfivehundredResponse(fivehundredUrl);

  $scope.changeCity = function () {
    let weatherUrl = `${weatherBaseUrl}${$scope.newCity}&appid=${weatherApiKey}&units=${unit}`;
    getWeatherResponse(weatherUrl);
    let fivehundredUrl = `${fivehundredBaseUrl}${$scope.newCity}&consumer_key=${consumerKey}&page=${number_of_page}&rpp=${photos_per_page}&image_size=${image_size}`;
    getfivehundredResponse(fivehundredUrl);
  };
}

export { weatherController };
