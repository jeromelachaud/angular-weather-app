import angular from 'angular';
import { weatherController } from './src/js/weatherController';
const app = angular.module('app', [])
app.controller('weatherController', ['$scope', weatherController])



fetchUrl(flickrUrl)
.then((response) => {
  response = JSON.parse(response);
  console.log(response);
});
