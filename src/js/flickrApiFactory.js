function flickrApiFactory() {

  const flickrApi = {
    apiKey : 'f67cc3b854f837e34c6f7bae8b3798cc',
    baseUrl: 'https://api.flickr.com/services/rest/?method=',
    method: 'flickr.photos.search',
    text: 'city+of+london',
    photos_per_page: 1,
    number_of_page: 1
  };

  return flickrApi;
}

export { flickrApiFactory };
