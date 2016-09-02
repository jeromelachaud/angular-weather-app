import angular from 'angular';
import { weatherController } from './src/js/weatherController';
import { flickrController } from './src/js/flickrController';

const svgSpriteInjector = require('./src/js/lib/svg-sprite-injector.js');
const svgSpriteContainer = document.getElementById('svgSpriteContainer');
svgSpriteInjector(svgSpriteContainer);

const app = angular.module('app', [])
  .filter('svgIcon', function ($sce) {
    return function(svgIcon) {
      return $sce.trustAsResourceUrl('#' + svgIcon);
    };
  });
app.controller('weatherController', ['$scope','$http',weatherController]);
app.controller('flickrController', ['$scope','$http',flickrController]);
