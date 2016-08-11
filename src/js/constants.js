const weatherApi = {
    apiKey: '0574fdb7238ef696712ccd89746bb0e0',
    baseUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
    city: 'London,uk',
    unit:  'metric'
};

const flickrApi = {
  apiKey: '0c035d432447898424771decaf20fa5b',
  baseUrl: 'https://api.flickr.com/services/rest/?method=',
  method: 'flickr.photos.search',
  text: 'city+of+london',
  group_id: '1074553%40N22',
  photos_per_page: 5,
  number_of_page: 1
};

export {
  weatherApi
};
