import {
  flickrApi
} from './src/js/constants';
import { fetchUrl } from './src/js/fetchUrl';
import moment from 'moment';
import angular from 'angular';
import { weatherController } from './src/js/weatherController';
const app = angular.module('app', [])
app.controller('weatherController', ['$scope', weatherController])

const {
  flickrApiKey,
  flickrApiBaseUrl,
  method,
  text,
  group_id,
  photos_per_page,
  number_of_page,
} = flickrApi;

const flickrUrl = `${flickrApiBaseUrl}${method}&api_key=${flickrApiKey}&text=${text}&group_id=${group_id}&per_page=${photos_per_page}&${number_of_page}=1&format=json&nojsoncallback=1`;

fetchUrl(flickrUrl)
.then((response) => {
  response = JSON.parse(response);
  console.log(response);
});
