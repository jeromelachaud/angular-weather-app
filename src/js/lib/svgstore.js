'use strict';

var svgstore = require('svgstore');
var fs = require('fs');

var sprites = svgstore()
.add('01d', fs.readFileSync('./src/svg/01d.svg', 'utf8'))
.add('01n', fs.readFileSync('./src/svg/01n.svg', 'utf8'))
.add('02d', fs.readFileSync('./src/svg/02d.svg', 'utf8'))
.add('02n', fs.readFileSync('./src/svg/02n.svg', 'utf8'))
.add('03d', fs.readFileSync('./src/svg/03d.svg', 'utf8'))
.add('03n', fs.readFileSync('./src/svg/03n.svg', 'utf8'))
.add('04d', fs.readFileSync('./src/svg/04d.svg', 'utf8'))
.add('04n', fs.readFileSync('./src/svg/04n.svg', 'utf8'))
.add('09d', fs.readFileSync('./src/svg/09d.svg', 'utf8'))
.add('09n', fs.readFileSync('./src/svg/09n.svg', 'utf8'))
.add('10d', fs.readFileSync('./src/svg/10d.svg', 'utf8'))
.add('10n', fs.readFileSync('./src/svg/10n.svg', 'utf8'))
.add('11d', fs.readFileSync('./src/svg/11d.svg', 'utf8'))
.add('11n', fs.readFileSync('./src/svg/11n.svg', 'utf8'))
.add('13d', fs.readFileSync('./src/svg/13d.svg', 'utf8'))
.add('13n', fs.readFileSync('./src/svg/13n.svg', 'utf8'))
.add('50d', fs.readFileSync('./src/svg/50d.svg', 'utf8'))
.add('50n', fs.readFileSync('./src/svg/50n.svg', 'utf8'))
.add('humidity', fs.readFileSync('./src/svg/humidity.svg', 'utf8'))
.add('sunrise', fs.readFileSync('./src/svg/sunrise.svg', 'utf8'))
.add('sunset', fs.readFileSync('./src/svg/sunset.svg', 'utf8'))
.add('temperature', fs.readFileSync('./src/svg/temperature.svg', 'utf8'))
.add('wind', fs.readFileSync('./src/svg/wind.svg', 'utf8'))
.add('search', fs.readFileSync('./src/svg/search.svg', 'utf8'));

fs.writeFileSync('./public/sprites.svg', sprites);
