function flickrController($scope, $http) {

  const flickrApi = {
    apiKey : '0c035d432447898424771decaf20fa5b',
    baseUrl: 'https://api.flickr.com/services/rest/?method=',
    method: 'flickr.photos.search',
    text: 'city+of+london',
    photos_per_page: 1,
    number_of_page: 1
  };

  const {
    apiKey ,
    baseUrl,
    method,
    text,
    group_id,
    photos_per_page,
    number_of_page
  } = flickrApi;

  const flickrUrl = `${baseUrl}${method}&api_key=${apiKey }&text=${text}&group_id=${group_id}&per_page=${photos_per_page}&${number_of_page}=1&format=json&nojsoncallback=1`;
  console.log(flickrUrl);
}

export { flickrController };
