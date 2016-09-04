import angular from 'angular';
import { weatherController } from './src/js/weatherController';
import { weatherApiFactory } from './src/js/weatherApiFactory';

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
app.controller('weatherController', ['$scope', '$http', 'weatherApiFactory', 'formDataFactory', weatherController]);
