const leapYears = function(cYear) {
    if (cYear % 4 == 0 && cYear % 100 !== 0) {
        return true;
    }
    else if (cYear % 100 == 0 && cYear % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
