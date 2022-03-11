const removeFromArray = function() {
    let el = Array.prototype.slice.call(arguments);
    let array = el.shift();
    for (i = 0; i < el.length; i++) {
        array = array.filter(x => x !== el[i]);
    }
    //console.log(array)
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
