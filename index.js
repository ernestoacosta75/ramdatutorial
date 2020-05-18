const R = require('ramda');

const cities = require('./cities.json');

const KtoC = k => k - 273.15;
const KtoF = k => k * 9/5 - 459.67;

const updateTemperature = R.curry((convertFn, city) => {
  const temp = Math.round(convertFn(city.temp));
  return R.merge(city, { temp });
});

const updatedCities = R.map(updateTemperature(KtoC), cities);

console.log(updatedCities);

const city = cities[0];
const updatedCity = updateTemperature(KtoF, city);
console.log(updatedCity);