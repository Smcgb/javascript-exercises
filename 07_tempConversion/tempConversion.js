const convertToCelsius = function(temp) {

  return parseFloat(((Math.round(100 * (temp-32) * 5 / 9)) / 100).toFixed(1));

};

const convertToFahrenheit = function(temp) {

  return parseFloat(((Math.round(100 * ((temp * 9 / 5) + 32))) / 100).toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
