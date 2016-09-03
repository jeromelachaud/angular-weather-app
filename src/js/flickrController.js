function flickrController($scope, $http, flickrApi, formDataFactory) {

  let {
    apiKey,
    baseUrl,
    method,
    text,
    photos_per_page,
    number_of_page
  } = flickrApi;

  const flickrUrl = `${baseUrl}${method}&api_key=${apiKey}&text=${text}&per_page=${photos_per_page}&${number_of_page}=1&format=json&nojsoncallback=1`;

  function getResponse(flickrUrl) {
    $http.get(flickrUrl)
    .success((response) => {
      $scope.farmId = response.photos.photo[0].farm;
      $scope.secret = response.photos.photo[0].secret;
      $scope.serverId = response.photos.photo[0].server;
      $scope.photoId = response.photos.photo[0].id;
    });
  }
  // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  getResponse(flickrUrl);

  // $scope.formDataFactory = formDataFactory;
  // $scope.changeCity = function () {
  //   let flickrUrl = `${flickrApi.baseUrl}${formDataFactory.newCity}&appid=${apiKey}&units=${unit}`;
  //   getResponse(flickrUrl);
  // };
}

export { flickrController };
