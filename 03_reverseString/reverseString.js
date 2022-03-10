const reverseString = function(string) {
    let len = string.length - 1;
    let rString = "";
    for (i = 0; i <= len; i++) {
        rString = rString + string[len - i];
    }
    return rString;
};

// Do not edit below this line
module.exports = reverseString;
