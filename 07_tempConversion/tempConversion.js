const convertToCelsius = function(farenheit) {
  let celsius = ((farenheit - 32.0) * 5.0/9.0);
  if (Number.isInteger(celsius)) {
    return celsius;
  }
  else {
    return parseFloat(celsius.toFixed(1));
  }
  
};

const convertToFahrenheit = function(celsius) {
  let farenheit = ((celsius * (9.0/5.0)) + 32.0);
  if (Number.isInteger(farenheit)) {
    return farenheit;
  }
  else {
    return parseFloat(farenheit.toFixed(1));
  }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
