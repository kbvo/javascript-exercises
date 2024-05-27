const repeatString = function(string, num) {
    if (num == 0) {
        return ""
    }
    if (num < 0) {
        return "ERROR"
    }
    word = string
    for (i = 1; i < num; ++i) {
        string += word
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
