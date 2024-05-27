const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    let largerNum = num1;
    let smallerNum = num2;
    if (num1 < num2) {
        largerNum = num2;
        smallerNum = num1;
    }
    let sum = 0;
    for (i = smallerNum; i <= largerNum; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
