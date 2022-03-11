const sumAll = function() {
    let nums = Array.prototype.slice.call(arguments);
    //console.log(nums)
    if (nums[0] > 0 && nums[1] > 0 && typeof nums[0] !== 'string' && typeof nums[1] !== 'string')  {
        nums.sort(function(a, b){return a - b});
        let total = nums[0];
        //console.log(nums);
        for (i = nums[0]; i < nums[1]; i++) {
            total = total + nums[0] + i;
        }
        return total;
    }
    else {
        return 'ERROR';
    }
};
//sumAll(10, [2, 15]);
// Do not edit below this line
module.exports = sumAll;
