import angular from 'angular';
import { weatherController } from './src/js/weatherController';
import { weatherApiFactory } from './src/js/weatherApiFactory';
import { fivehundredApiFactory } from './src/js/fivehundredApiFactory';

const svgSpriteInjector = require('./src/js/lib/svg-sprite-injector.js');
const svgSpriteContainer = document.getElementById('svgSpriteContainer');
svgSpriteInjector(svgSpriteContainer);

const app = angular.module('app', [])
  .filter('svgIcon', function ($sce) {
    return function(svgIcon) {
      return $sce.trustAsResourceUrl('#' + svgIcon);
    };
  });
app.factory('weatherApiFactory', [weatherApiFactory]);
app.factory('fivehundredApiFactory', [fivehundredApiFactory]);
app.controller('weatherController', ['$scope', '$http', 'weatherApiFactory', 'fivehundredApiFactory', weatherController]);
