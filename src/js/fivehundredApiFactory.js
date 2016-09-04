function fivehundredApiFactory() {

  const fivehundredApi = {
    fivehundredBaseUrl: 'https://api.500px.com/v1/photos/search?term=',
    term: 'city+of+london',
    consumerKey : 'yywkC96NMYDUuFIRVaq6xle1AkFBtdwgYPsbJhJT',
    number_of_page: 1,
    photos_per_page: 1,
    image_size: '6'
  };

  return fivehundredApi;
}

export { fivehundredApiFactory };
