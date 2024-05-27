const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let mySum = array.reduce((total, currItem) => {
    return total + currItem;
  }, 0);
  return mySum;
};

const multiply = function(array) {
  let myProduct = array.reduce((total, currItem) => {
    return total * currItem;
  }, 1);
  return myProduct;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let i = num;
  let factorial = num;
	while (i > 1) {
    factorial *= --i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
